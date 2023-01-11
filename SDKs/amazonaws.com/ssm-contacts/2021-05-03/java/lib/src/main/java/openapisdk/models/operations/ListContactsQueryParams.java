package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListContactsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListContactsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}