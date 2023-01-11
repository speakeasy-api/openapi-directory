package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserDefinedFunctionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetUserDefinedFunctionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetUserDefinedFunctionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}