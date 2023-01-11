package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActionExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListActionExecutionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListActionExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}