package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetFindingsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetFindingsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}