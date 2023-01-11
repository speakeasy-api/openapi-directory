package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPortalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListPortalsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListPortalsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}