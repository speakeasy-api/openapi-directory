package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteVirtualInterfaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceState")
    public VirtualInterfaceStateEnum virtualInterfaceState;
    public DeleteVirtualInterfaceResponse withVirtualInterfaceState(VirtualInterfaceStateEnum virtualInterfaceState) {
        this.virtualInterfaceState = virtualInterfaceState;
        return this;
    }
}