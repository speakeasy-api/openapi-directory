package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionProxyConfigurationDetails
 * The configuration details for the App Mesh proxy.
**/
public class AwsEcsTaskDefinitionProxyConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerName")
    public String containerName;
    public AwsEcsTaskDefinitionProxyConfigurationDetails withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProxyConfigurationProperties")
    public AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[] proxyConfigurationProperties;
    public AwsEcsTaskDefinitionProxyConfigurationDetails withProxyConfigurationProperties(AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[] proxyConfigurationProperties) {
        this.proxyConfigurationProperties = proxyConfigurationProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsTaskDefinitionProxyConfigurationDetails withType(String type) {
        this.type = type;
        return this;
    }
}