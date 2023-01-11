package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateHostedConnectionRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AssociateHostedConnectionRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("parentConnectionId")
    public String parentConnectionId;
    public AssociateHostedConnectionRequest withParentConnectionId(String parentConnectionId) {
        this.parentConnectionId = parentConnectionId;
        return this;
    }
}