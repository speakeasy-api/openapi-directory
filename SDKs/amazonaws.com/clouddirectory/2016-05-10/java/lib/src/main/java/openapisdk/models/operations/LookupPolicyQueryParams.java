package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public LookupPolicyQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public LookupPolicyQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}