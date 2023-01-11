package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
 * A network configuration parameter to provide to the Container Network Interface (CNI) plugin.
**/
public class AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails withValue(String value) {
        this.value = value;
        return this;
    }
}