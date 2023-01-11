package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
 * A secret to pass to the log configuration.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValueFrom")
    public String valueFrom;
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails withValueFrom(String valueFrom) {
        this.valueFrom = valueFrom;
        return this;
    }
}