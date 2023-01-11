package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public GetResourceSharesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetResourceSharesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}