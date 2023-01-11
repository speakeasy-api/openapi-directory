package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualRouterSpec
 * An object that represents the specification of a virtual router.
**/
public class VirtualRouterSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeners")
    public VirtualRouterListener[] listeners;
    public VirtualRouterSpec withListeners(VirtualRouterListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
}