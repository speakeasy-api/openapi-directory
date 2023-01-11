package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListDatasetsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDatasetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}