package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListEntitiesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListEntitiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}