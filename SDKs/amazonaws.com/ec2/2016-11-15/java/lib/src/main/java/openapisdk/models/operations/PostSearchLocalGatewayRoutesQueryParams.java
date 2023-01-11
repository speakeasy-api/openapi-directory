package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchLocalGatewayRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSearchLocalGatewayRoutesActionEnum action;
    public PostSearchLocalGatewayRoutesQueryParams withAction(PostSearchLocalGatewayRoutesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostSearchLocalGatewayRoutesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostSearchLocalGatewayRoutesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSearchLocalGatewayRoutesVersionEnum version;
    public PostSearchLocalGatewayRoutesQueryParams withVersion(PostSearchLocalGatewayRoutesVersionEnum version) {
        this.version = version;
        return this;
    }
}