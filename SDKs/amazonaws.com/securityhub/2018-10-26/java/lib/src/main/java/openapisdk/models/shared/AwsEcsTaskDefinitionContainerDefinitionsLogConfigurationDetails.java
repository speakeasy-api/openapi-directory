package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
 * The log configuration specification for the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogDriver")
    public String logDriver;
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails withLogDriver(String logDriver) {
        this.logDriver = logDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public java.util.Map<String, String> options;
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretOptions")
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] secretOptions;
    public AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails withSecretOptions(AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] secretOptions) {
        this.secretOptions = secretOptions;
        return this;
    }
}