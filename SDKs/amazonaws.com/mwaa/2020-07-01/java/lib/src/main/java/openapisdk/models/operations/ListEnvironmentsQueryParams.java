package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListEnvironmentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListEnvironmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}