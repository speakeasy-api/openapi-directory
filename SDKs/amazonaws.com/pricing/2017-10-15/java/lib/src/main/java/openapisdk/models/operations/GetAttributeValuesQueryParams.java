package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttributeValuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetAttributeValuesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetAttributeValuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}