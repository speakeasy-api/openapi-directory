package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayMulticastDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayMulticastDomainsActionEnum action;
    public PostDescribeTransitGatewayMulticastDomainsQueryParams withAction(PostDescribeTransitGatewayMulticastDomainsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayMulticastDomainsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayMulticastDomainsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayMulticastDomainsVersionEnum version;
    public PostDescribeTransitGatewayMulticastDomainsQueryParams withVersion(PostDescribeTransitGatewayMulticastDomainsVersionEnum version) {
        this.version = version;
        return this;
    }
}