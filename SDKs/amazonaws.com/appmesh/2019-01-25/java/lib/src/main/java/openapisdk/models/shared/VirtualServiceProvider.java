package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualServiceProvider
 * An object that represents the provider for a virtual service.
**/
public class VirtualServiceProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualNode")
    public VirtualNodeServiceProvider virtualNode;
    public VirtualServiceProvider withVirtualNode(VirtualNodeServiceProvider virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualRouter")
    public VirtualRouterServiceProvider virtualRouter;
    public VirtualServiceProvider withVirtualRouter(VirtualRouterServiceProvider virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}