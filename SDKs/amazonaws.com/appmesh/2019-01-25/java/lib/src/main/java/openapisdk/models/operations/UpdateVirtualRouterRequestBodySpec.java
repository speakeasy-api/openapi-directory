package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVirtualRouterRequestBodySpec
 * An object that represents the specification of a virtual router.
**/
public class UpdateVirtualRouterRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.VirtualRouterListener[] listeners;
    public UpdateVirtualRouterRequestBodySpec withListeners(openapisdk.models.shared.VirtualRouterListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
}