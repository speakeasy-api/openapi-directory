package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListTagsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTagsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}