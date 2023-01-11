package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListRecommendationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListRecommendationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}