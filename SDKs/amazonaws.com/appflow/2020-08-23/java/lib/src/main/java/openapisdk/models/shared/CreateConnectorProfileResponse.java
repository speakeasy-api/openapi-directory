package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectorProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileArn")
    public String connectorProfileArn;
    public CreateConnectorProfileResponse withConnectorProfileArn(String connectorProfileArn) {
        this.connectorProfileArn = connectorProfileArn;
        return this;
    }
}