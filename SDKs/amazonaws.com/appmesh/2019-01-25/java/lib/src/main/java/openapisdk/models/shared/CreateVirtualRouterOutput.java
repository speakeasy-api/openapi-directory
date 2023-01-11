package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVirtualRouterOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class CreateVirtualRouterOutput {
    @JsonProperty("virtualRouter")
    public VirtualRouterData virtualRouter;
    public CreateVirtualRouterOutput withVirtualRouter(VirtualRouterData virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}