package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfileObjectTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public ListProfileObjectTypesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public ListProfileObjectTypesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}