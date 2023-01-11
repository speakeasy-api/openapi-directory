package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListIdentitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListIdentitiesActionEnum action;
    public PostListIdentitiesQueryParams withAction(PostListIdentitiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListIdentitiesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListIdentitiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListIdentitiesVersionEnum version;
    public PostListIdentitiesQueryParams withVersion(PostListIdentitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}