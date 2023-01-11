package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
 * A namespaced kernel parameter to set in the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public String namespace;
    public AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails withValue(String value) {
        this.value = value;
        return this;
    }
}