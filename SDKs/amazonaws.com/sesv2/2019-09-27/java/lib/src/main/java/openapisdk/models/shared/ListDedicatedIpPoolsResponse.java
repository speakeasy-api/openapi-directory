package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDedicatedIpPoolsResponse
 * A list of dedicated IP pools.
**/
public class ListDedicatedIpPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedIpPools")
    public String[] dedicatedIpPools;
    public ListDedicatedIpPoolsResponse withDedicatedIpPools(String[] dedicatedIpPools) {
        this.dedicatedIpPools = dedicatedIpPools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDedicatedIpPoolsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}