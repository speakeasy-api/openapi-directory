package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayAttachmentPropagationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTransitGatewayAttachmentPropagationsActionEnum action;
    public PostGetTransitGatewayAttachmentPropagationsQueryParams withAction(PostGetTransitGatewayAttachmentPropagationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetTransitGatewayAttachmentPropagationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetTransitGatewayAttachmentPropagationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTransitGatewayAttachmentPropagationsVersionEnum version;
    public PostGetTransitGatewayAttachmentPropagationsQueryParams withVersion(PostGetTransitGatewayAttachmentPropagationsVersionEnum version) {
        this.version = version;
        return this;
    }
}