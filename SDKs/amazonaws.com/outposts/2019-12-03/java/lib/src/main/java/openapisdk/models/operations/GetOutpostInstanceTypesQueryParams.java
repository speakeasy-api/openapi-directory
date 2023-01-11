package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOutpostInstanceTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetOutpostInstanceTypesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetOutpostInstanceTypesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}