package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTriggersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListTriggersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTriggersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}