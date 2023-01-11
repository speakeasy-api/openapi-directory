package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewaysRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DescribeDirectConnectGatewaysRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeDirectConnectGatewaysRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewaysRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}