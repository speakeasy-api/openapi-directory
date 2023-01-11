package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateConnectionWithLagRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AssociateConnectionWithLagRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("lagId")
    public String lagId;
    public AssociateConnectionWithLagRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
}