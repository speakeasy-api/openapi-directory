package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfirmPrivateVirtualInterfaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceState")
    public VirtualInterfaceStateEnum virtualInterfaceState;
    public ConfirmPrivateVirtualInterfaceResponse withVirtualInterfaceState(VirtualInterfaceStateEnum virtualInterfaceState) {
        this.virtualInterfaceState = virtualInterfaceState;
        return this;
    }
}