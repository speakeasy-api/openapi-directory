package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateConnectionFromLagRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public DisassociateConnectionFromLagRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("lagId")
    public String lagId;
    public DisassociateConnectionFromLagRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
}