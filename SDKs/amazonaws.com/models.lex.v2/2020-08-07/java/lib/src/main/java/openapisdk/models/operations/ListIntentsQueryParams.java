package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIntentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListIntentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListIntentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}