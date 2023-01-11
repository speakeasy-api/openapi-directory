package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTransitVirtualInterfaceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterface")
    public VirtualInterface virtualInterface;
    public CreateTransitVirtualInterfaceResult withVirtualInterface(VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}