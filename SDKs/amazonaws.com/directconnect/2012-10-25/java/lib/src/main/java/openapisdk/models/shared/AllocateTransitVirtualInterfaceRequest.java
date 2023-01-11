package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AllocateTransitVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public AllocateTransitVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("newTransitVirtualInterfaceAllocation")
    public NewTransitVirtualInterfaceAllocation newTransitVirtualInterfaceAllocation;
    public AllocateTransitVirtualInterfaceRequest withNewTransitVirtualInterfaceAllocation(NewTransitVirtualInterfaceAllocation newTransitVirtualInterfaceAllocation) {
        this.newTransitVirtualInterfaceAllocation = newTransitVirtualInterfaceAllocation;
        return this;
    }
    @JsonProperty("ownerAccount")
    public String ownerAccount;
    public AllocateTransitVirtualInterfaceRequest withOwnerAccount(String ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
}