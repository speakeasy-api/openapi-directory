package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInferenceSchedulersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListInferenceSchedulersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListInferenceSchedulersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}