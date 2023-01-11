package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayPeeringAttachmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTransitGatewayPeeringAttachmentsActionEnum action;
    public PostDescribeTransitGatewayPeeringAttachmentsQueryParams withAction(PostDescribeTransitGatewayPeeringAttachmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTransitGatewayPeeringAttachmentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTransitGatewayPeeringAttachmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTransitGatewayPeeringAttachmentsVersionEnum version;
    public PostDescribeTransitGatewayPeeringAttachmentsQueryParams withVersion(PostDescribeTransitGatewayPeeringAttachmentsVersionEnum version) {
        this.version = version;
        return this;
    }
}