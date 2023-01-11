package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public GetMatchesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public GetMatchesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}