package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceDelegatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListResourceDelegatesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListResourceDelegatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}