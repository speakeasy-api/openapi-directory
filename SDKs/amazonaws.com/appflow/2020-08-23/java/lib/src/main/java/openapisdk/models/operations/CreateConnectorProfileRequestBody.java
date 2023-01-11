package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectorProfileRequestBody {
    @JsonProperty("connectionMode")
    public CreateConnectorProfileRequestBodyConnectionModeEnum connectionMode;
    public CreateConnectorProfileRequestBody withConnectionMode(CreateConnectorProfileRequestBodyConnectionModeEnum connectionMode) {
        this.connectionMode = connectionMode;
        return this;
    }
    @JsonProperty("connectorProfileConfig")
    public CreateConnectorProfileRequestBodyConnectorProfileConfig connectorProfileConfig;
    public CreateConnectorProfileRequestBody withConnectorProfileConfig(CreateConnectorProfileRequestBodyConnectorProfileConfig connectorProfileConfig) {
        this.connectorProfileConfig = connectorProfileConfig;
        return this;
    }
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public CreateConnectorProfileRequestBody withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonProperty("connectorType")
    public CreateConnectorProfileRequestBodyConnectorTypeEnum connectorType;
    public CreateConnectorProfileRequestBody withConnectorType(CreateConnectorProfileRequestBodyConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsArn")
    public String kmsArn;
    public CreateConnectorProfileRequestBody withKmsArn(String kmsArn) {
        this.kmsArn = kmsArn;
        return this;
    }
}