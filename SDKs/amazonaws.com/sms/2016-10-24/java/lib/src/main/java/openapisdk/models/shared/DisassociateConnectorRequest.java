package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateConnectorRequest {
    @JsonProperty("connectorId")
    public String connectorId;
    public DisassociateConnectorRequest withConnectorId(String connectorId) {
        this.connectorId = connectorId;
        return this;
    }
}