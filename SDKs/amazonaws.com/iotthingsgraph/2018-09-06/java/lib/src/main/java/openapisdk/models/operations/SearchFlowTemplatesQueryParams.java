package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFlowTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public SearchFlowTemplatesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public SearchFlowTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}