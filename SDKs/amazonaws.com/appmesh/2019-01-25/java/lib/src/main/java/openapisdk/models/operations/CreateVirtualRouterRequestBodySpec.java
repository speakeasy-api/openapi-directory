package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVirtualRouterRequestBodySpec
 * An object that represents the specification of a virtual router.
**/
public class CreateVirtualRouterRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public openapisdk.models.shared.VirtualRouterListener[] listeners;
    public CreateVirtualRouterRequestBodySpec withListeners(openapisdk.models.shared.VirtualRouterListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
}