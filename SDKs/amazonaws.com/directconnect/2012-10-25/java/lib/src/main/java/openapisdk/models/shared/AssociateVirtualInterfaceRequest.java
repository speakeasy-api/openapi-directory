package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AssociateVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public AssociateVirtualInterfaceRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}