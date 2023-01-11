package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualInterfaces {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaces")
    public VirtualInterface[] virtualInterfaces;
    public VirtualInterfaces withVirtualInterfaces(VirtualInterface[] virtualInterfaces) {
        this.virtualInterfaces = virtualInterfaces;
        return this;
    }
}