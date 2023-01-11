package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFindingsFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListFindingsFiltersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFindingsFiltersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}