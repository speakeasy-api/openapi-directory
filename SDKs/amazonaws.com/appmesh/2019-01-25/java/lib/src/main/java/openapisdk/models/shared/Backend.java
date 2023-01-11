package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Backend
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
**/
public class Backend {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualService")
    public VirtualServiceBackend virtualService;
    public Backend withVirtualService(VirtualServiceBackend virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}