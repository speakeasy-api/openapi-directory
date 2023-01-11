package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVirtualServicesOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class ListVirtualServicesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVirtualServicesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("virtualServices")
    public VirtualServiceRef[] virtualServices;
    public ListVirtualServicesOutput withVirtualServices(VirtualServiceRef[] virtualServices) {
        this.virtualServices = virtualServices;
        return this;
    }
}