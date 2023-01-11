package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolversQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListResolversQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListResolversQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}