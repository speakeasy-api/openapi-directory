package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDomainAssociationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDomainAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}