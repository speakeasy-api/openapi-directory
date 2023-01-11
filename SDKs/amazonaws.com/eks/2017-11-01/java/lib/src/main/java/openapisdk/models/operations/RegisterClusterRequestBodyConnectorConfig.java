package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterClusterRequestBodyConnectorConfig
 * The configuration sent to a cluster for configuration.
**/
public class RegisterClusterRequestBodyConnectorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public openapisdk.models.shared.ConnectorConfigProviderEnum provider;
    public RegisterClusterRequestBodyConnectorConfig withProvider(openapisdk.models.shared.ConnectorConfigProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public RegisterClusterRequestBodyConnectorConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}