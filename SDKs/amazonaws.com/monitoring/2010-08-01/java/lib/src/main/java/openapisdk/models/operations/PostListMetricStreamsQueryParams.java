package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListMetricStreamsActionEnum action;
    public PostListMetricStreamsQueryParams withAction(PostListMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostListMetricStreamsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListMetricStreamsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListMetricStreamsVersionEnum version;
    public PostListMetricStreamsQueryParams withVersion(PostListMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}