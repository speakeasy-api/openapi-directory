package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionPlacementConstraintsDetails
 * A placement constraint object to use for tasks.
**/
public class AwsEcsTaskDefinitionPlacementConstraintsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public AwsEcsTaskDefinitionPlacementConstraintsDetails withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsTaskDefinitionPlacementConstraintsDetails withType(String type) {
        this.type = type;
        return this;
    }
}