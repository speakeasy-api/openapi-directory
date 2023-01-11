package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImagePipelinesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListImagePipelinesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListImagePipelinesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}