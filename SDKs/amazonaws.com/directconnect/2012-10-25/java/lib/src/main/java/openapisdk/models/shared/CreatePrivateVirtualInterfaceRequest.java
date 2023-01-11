package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePrivateVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public CreatePrivateVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("newPrivateVirtualInterface")
    public NewPrivateVirtualInterface newPrivateVirtualInterface;
    public CreatePrivateVirtualInterfaceRequest withNewPrivateVirtualInterface(NewPrivateVirtualInterface newPrivateVirtualInterface) {
        this.newPrivateVirtualInterface = newPrivateVirtualInterface;
        return this;
    }
}