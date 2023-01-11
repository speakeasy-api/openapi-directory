package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayConnectPeersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayConnectPeersActionEnum action;
    public PostDescribeTransitGatewayConnectPeersQueryParams withAction(PostDescribeTransitGatewayConnectPeersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayConnectPeersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayConnectPeersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayConnectPeersVersionEnum version;
    public PostDescribeTransitGatewayConnectPeersQueryParams withVersion(PostDescribeTransitGatewayConnectPeersVersionEnum version) {
        this.version = version;
        return this;
    }
}