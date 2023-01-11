package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
 * A secret to pass to the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValueFrom")
    public String valueFrom;
    public AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails withValueFrom(String valueFrom) {
        this.valueFrom = valueFrom;
        return this;
    }
}