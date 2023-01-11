package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebsiteAuthorizationProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListWebsiteAuthorizationProvidersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListWebsiteAuthorizationProvidersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}