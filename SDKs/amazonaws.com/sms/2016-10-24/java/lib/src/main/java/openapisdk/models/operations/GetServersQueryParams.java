package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public GetServersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetServersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}