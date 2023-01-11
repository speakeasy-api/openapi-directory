package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIntegrationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public ListIntegrationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public ListIntegrationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}