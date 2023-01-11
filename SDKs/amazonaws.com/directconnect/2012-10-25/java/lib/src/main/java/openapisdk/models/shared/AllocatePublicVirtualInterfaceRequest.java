package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AllocatePublicVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AllocatePublicVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("newPublicVirtualInterfaceAllocation")
    public NewPublicVirtualInterfaceAllocation newPublicVirtualInterfaceAllocation;
    public AllocatePublicVirtualInterfaceRequest withNewPublicVirtualInterfaceAllocation(NewPublicVirtualInterfaceAllocation newPublicVirtualInterfaceAllocation) {
        this.newPublicVirtualInterfaceAllocation = newPublicVirtualInterfaceAllocation;
        return this;
    }
    @JsonProperty("ownerAccount")
    public String ownerAccount;
    public AllocatePublicVirtualInterfaceRequest withOwnerAccount(String ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
}