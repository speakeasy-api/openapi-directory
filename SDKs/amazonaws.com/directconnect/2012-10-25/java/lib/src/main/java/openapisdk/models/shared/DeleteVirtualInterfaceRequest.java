package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVirtualInterfaceRequest {
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public DeleteVirtualInterfaceRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}