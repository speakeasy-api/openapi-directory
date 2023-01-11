package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListPoliciesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListPoliciesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}