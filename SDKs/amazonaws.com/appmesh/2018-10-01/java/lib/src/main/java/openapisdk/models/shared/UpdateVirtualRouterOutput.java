package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualRouterOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualRouter")
    public VirtualRouterData virtualRouter;
    public UpdateVirtualRouterOutput withVirtualRouter(VirtualRouterData virtualRouter) {
        this.virtualRouter = virtualRouter;
        return this;
    }
}