package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTransitVirtualInterfaceRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public CreateTransitVirtualInterfaceRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("newTransitVirtualInterface")
    public NewTransitVirtualInterface newTransitVirtualInterface;
    public CreateTransitVirtualInterfaceRequest withNewTransitVirtualInterface(NewTransitVirtualInterface newTransitVirtualInterface) {
        this.newTransitVirtualInterface = newTransitVirtualInterface;
        return this;
    }
}