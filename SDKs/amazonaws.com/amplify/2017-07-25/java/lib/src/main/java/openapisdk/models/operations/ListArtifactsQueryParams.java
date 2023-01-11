package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListArtifactsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListArtifactsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}