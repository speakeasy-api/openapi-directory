package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListQueuesActionEnum action;
    public PostListQueuesQueryParams withAction(PostListQueuesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostListQueuesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListQueuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListQueuesVersionEnum version;
    public PostListQueuesQueryParams withVersion(PostListQueuesVersionEnum version) {
        this.version = version;
        return this;
    }
}