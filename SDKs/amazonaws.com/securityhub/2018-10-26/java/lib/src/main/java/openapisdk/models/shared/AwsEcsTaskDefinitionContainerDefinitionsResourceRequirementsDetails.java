package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
 * A resource to assign to a container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails withValue(String value) {
        this.value = value;
        return this;
    }
}