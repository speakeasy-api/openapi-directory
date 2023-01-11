package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApiKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListApiKeysQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListApiKeysQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}