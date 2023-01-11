package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSitesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListSitesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListSitesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}