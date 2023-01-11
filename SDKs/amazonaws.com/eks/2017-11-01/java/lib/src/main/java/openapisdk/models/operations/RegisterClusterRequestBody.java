package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterClusterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public RegisterClusterRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("connectorConfig")
    public RegisterClusterRequestBodyConnectorConfig connectorConfig;
    public RegisterClusterRequestBody withConnectorConfig(RegisterClusterRequestBodyConnectorConfig connectorConfig) {
        this.connectorConfig = connectorConfig;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RegisterClusterRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}