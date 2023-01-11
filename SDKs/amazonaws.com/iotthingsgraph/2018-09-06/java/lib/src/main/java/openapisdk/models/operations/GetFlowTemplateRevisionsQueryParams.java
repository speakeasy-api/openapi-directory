package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFlowTemplateRevisionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public GetFlowTemplateRevisionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetFlowTemplateRevisionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}