package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPagesByEngagementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListPagesByEngagementQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListPagesByEngagementQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}