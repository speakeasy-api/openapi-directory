package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListDomainsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDomainsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}