package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayAttachmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayAttachmentsActionEnum action;
    public PostDescribeTransitGatewayAttachmentsQueryParams withAction(PostDescribeTransitGatewayAttachmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayAttachmentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayAttachmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayAttachmentsVersionEnum version;
    public PostDescribeTransitGatewayAttachmentsQueryParams withVersion(PostDescribeTransitGatewayAttachmentsVersionEnum version) {
        this.version = version;
        return this;
    }
}