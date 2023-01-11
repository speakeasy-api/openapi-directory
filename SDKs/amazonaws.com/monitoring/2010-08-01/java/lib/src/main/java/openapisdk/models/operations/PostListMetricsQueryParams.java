package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListMetricsActionEnum action;
    public PostListMetricsQueryParams withAction(PostListMetricsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListMetricsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListMetricsVersionEnum version;
    public PostListMetricsQueryParams withVersion(PostListMetricsVersionEnum version) {
        this.version = version;
        return this;
    }
}