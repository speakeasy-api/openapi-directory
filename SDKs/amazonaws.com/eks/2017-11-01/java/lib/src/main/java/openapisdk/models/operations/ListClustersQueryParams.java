package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClustersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String[] include;
    public ListClustersQueryParams withInclude(String[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListClustersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListClustersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}