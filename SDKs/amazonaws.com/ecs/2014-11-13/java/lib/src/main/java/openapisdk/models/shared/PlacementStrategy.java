package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementStrategy
 * The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
public class PlacementStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public PlacementStrategy withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PlacementStrategyTypeEnum type;
    public PlacementStrategy withType(PlacementStrategyTypeEnum type) {
        this.type = type;
        return this;
    }
}