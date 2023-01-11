package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateVirtualRouterOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class UpdateVirtualRouterOutput {
    @JsonProperty("virtualRouter")
    public VirtualRouterData virtualRouter;
    public UpdateVirtualRouterOutput withVirtualRouter(VirtualRouterData virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}