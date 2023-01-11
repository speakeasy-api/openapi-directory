package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServicePlacementConstraintsDetails
 * A placement constraint for the tasks in the service.
**/
public class AwsEcsServicePlacementConstraintsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public AwsEcsServicePlacementConstraintsDetails withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsServicePlacementConstraintsDetails withType(String type) {
        this.type = type;
        return this;
    }
}