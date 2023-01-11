package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInsightsPathsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNetworkInsightsPathsActionEnum action;
    public PostDescribeNetworkInsightsPathsQueryParams withAction(PostDescribeNetworkInsightsPathsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeNetworkInsightsPathsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeNetworkInsightsPathsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNetworkInsightsPathsVersionEnum version;
    public PostDescribeNetworkInsightsPathsQueryParams withVersion(PostDescribeNetworkInsightsPathsVersionEnum version) {
        this.version = version;
        return this;
    }
}