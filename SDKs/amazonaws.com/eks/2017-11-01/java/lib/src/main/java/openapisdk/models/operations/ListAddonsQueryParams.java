package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAddonsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAddonsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAddonsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}