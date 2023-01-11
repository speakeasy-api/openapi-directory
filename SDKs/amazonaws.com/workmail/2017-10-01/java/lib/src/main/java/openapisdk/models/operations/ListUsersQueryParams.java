package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListUsersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListUsersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}