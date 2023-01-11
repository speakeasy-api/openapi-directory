package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVirtualRouterOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DeleteVirtualRouterOutput {
    @JsonProperty("virtualRouter")
    public VirtualRouterData virtualRouter;
    public DeleteVirtualRouterOutput withVirtualRouter(VirtualRouterData virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}