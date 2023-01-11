package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVirtualRoutersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVirtualRoutersOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("virtualRouters")
    public VirtualRouterRef[] virtualRouters;
    public ListVirtualRoutersOutput withVirtualRouters(VirtualRouterRef[] virtualRouters) {
        this.virtualRouters = virtualRouters;
        return this;
    }
}