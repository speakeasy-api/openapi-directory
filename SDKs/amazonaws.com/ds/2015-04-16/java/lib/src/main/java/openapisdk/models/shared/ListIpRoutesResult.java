package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIpRoutesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpRoutesInfo")
    public IpRouteInfo[] ipRoutesInfo;
    public ListIpRoutesResult withIpRoutesInfo(IpRouteInfo[] ipRoutesInfo) {
        this.ipRoutesInfo = ipRoutesInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIpRoutesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}