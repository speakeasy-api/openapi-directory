package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDedicatedIpsResponse
 * Information about the dedicated IP addresses that are associated with your AWS account.
**/
public class GetDedicatedIpsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedIps")
    public DedicatedIp[] dedicatedIps;
    public GetDedicatedIpsResponse withDedicatedIps(DedicatedIp[] dedicatedIps) {
        this.dedicatedIps = dedicatedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDedicatedIpsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}