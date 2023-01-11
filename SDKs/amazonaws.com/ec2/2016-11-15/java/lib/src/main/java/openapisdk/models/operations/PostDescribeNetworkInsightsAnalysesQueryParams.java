package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInsightsAnalysesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNetworkInsightsAnalysesActionEnum action;
    public PostDescribeNetworkInsightsAnalysesQueryParams withAction(PostDescribeNetworkInsightsAnalysesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeNetworkInsightsAnalysesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeNetworkInsightsAnalysesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNetworkInsightsAnalysesVersionEnum version;
    public PostDescribeNetworkInsightsAnalysesQueryParams withVersion(PostDescribeNetworkInsightsAnalysesVersionEnum version) {
        this.version = version;
        return this;
    }
}