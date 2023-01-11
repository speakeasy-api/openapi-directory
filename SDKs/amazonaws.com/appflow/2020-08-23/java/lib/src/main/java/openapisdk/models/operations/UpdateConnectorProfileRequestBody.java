package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConnectorProfileRequestBody {
    @JsonProperty("connectionMode")
    public UpdateConnectorProfileRequestBodyConnectionModeEnum connectionMode;
    public UpdateConnectorProfileRequestBody withConnectionMode(UpdateConnectorProfileRequestBodyConnectionModeEnum connectionMode) {
        this.connectionMode = connectionMode;
        return this;
    }
    @JsonProperty("connectorProfileConfig")
    public UpdateConnectorProfileRequestBodyConnectorProfileConfig connectorProfileConfig;
    public UpdateConnectorProfileRequestBody withConnectorProfileConfig(UpdateConnectorProfileRequestBodyConnectorProfileConfig connectorProfileConfig) {
        this.connectorProfileConfig = connectorProfileConfig;
        return this;
    }
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public UpdateConnectorProfileRequestBody withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
}