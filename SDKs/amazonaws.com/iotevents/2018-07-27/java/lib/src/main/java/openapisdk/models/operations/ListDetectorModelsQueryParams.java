package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDetectorModelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDetectorModelsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDetectorModelsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}