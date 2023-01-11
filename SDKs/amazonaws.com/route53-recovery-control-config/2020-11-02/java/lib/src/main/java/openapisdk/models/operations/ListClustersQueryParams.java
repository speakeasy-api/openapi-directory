package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClustersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListClustersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListClustersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}