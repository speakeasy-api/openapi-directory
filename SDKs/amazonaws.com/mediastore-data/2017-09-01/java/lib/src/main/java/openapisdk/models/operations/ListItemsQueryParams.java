package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListItemsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListItemsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Path")
    public String path;
    public ListItemsQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
}