package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnabledProductsForImportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListEnabledProductsForImportQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListEnabledProductsForImportQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}