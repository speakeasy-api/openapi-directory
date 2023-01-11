package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementConstraint
 * An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.
**/
public class PlacementConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public PlacementConstraint withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PlacementConstraintTypeEnum type;
    public PlacementConstraint withType(PlacementConstraintTypeEnum type) {
        this.type = type;
        return this;
    }
}