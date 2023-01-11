package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListLocationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListLocationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}