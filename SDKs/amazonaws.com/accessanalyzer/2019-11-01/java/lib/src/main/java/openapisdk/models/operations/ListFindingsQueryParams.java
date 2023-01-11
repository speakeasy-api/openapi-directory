package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFindingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListFindingsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFindingsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}