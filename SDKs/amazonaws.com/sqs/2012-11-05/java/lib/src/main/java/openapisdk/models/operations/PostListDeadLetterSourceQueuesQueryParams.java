package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDeadLetterSourceQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListDeadLetterSourceQueuesActionEnum action;
    public PostListDeadLetterSourceQueuesQueryParams withAction(PostListDeadLetterSourceQueuesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostListDeadLetterSourceQueuesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListDeadLetterSourceQueuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListDeadLetterSourceQueuesVersionEnum version;
    public PostListDeadLetterSourceQueuesQueryParams withVersion(PostListDeadLetterSourceQueuesVersionEnum version) {
        this.version = version;
        return this;
    }
}