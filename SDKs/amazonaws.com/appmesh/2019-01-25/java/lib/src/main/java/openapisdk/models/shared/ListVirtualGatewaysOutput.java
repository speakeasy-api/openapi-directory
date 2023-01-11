package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVirtualGatewaysOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVirtualGatewaysOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("virtualGateways")
    public VirtualGatewayRef[] virtualGateways;
    public ListVirtualGatewaysOutput withVirtualGateways(VirtualGatewayRef[] virtualGateways) {
        this.virtualGateways = virtualGateways;
        return this;
    }
}