package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListFiltersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFiltersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}