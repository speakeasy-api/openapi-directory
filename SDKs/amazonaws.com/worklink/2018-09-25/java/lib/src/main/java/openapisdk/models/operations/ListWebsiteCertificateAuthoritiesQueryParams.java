package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebsiteCertificateAuthoritiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListWebsiteCertificateAuthoritiesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListWebsiteCertificateAuthoritiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}