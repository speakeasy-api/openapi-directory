package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkflowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListWorkflowsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListWorkflowsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}