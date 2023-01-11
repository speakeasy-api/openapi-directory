package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecretsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListSecretsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListSecretsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}