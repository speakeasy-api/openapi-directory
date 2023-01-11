package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeVirtualRouterOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DescribeVirtualRouterOutput {
    @JsonProperty("virtualRouter")
    public VirtualRouterData virtualRouter;
    public DescribeVirtualRouterOutput withVirtualRouter(VirtualRouterData virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}