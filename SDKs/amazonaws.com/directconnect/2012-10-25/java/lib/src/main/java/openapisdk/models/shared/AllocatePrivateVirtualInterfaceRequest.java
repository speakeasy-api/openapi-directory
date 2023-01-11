package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AllocatePrivateVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AllocatePrivateVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("newPrivateVirtualInterfaceAllocation")
    public NewPrivateVirtualInterfaceAllocation newPrivateVirtualInterfaceAllocation;
    public AllocatePrivateVirtualInterfaceRequest withNewPrivateVirtualInterfaceAllocation(NewPrivateVirtualInterfaceAllocation newPrivateVirtualInterfaceAllocation) {
        this.newPrivateVirtualInterfaceAllocation = newPrivateVirtualInterfaceAllocation;
        return this;
    }
    @JsonProperty("ownerAccount")
    public String ownerAccount;
    public AllocatePrivateVirtualInterfaceRequest withOwnerAccount(String ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
}