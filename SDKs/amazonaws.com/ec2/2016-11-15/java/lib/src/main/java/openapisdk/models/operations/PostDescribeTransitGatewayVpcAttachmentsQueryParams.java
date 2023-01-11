package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayVpcAttachmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayVpcAttachmentsActionEnum action;
    public PostDescribeTransitGatewayVpcAttachmentsQueryParams withAction(PostDescribeTransitGatewayVpcAttachmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayVpcAttachmentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayVpcAttachmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayVpcAttachmentsVersionEnum version;
    public PostDescribeTransitGatewayVpcAttachmentsQueryParams withVersion(PostDescribeTransitGatewayVpcAttachmentsVersionEnum version) {
        this.version = version;
        return this;
    }
}