package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfileObjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public ListProfileObjectsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public ListProfileObjectsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}