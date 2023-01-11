package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceDefinitionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListResourceDefinitionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListResourceDefinitionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}