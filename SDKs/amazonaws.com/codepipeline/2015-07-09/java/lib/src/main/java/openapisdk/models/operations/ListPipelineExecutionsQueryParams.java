package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPipelineExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListPipelineExecutionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListPipelineExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}