package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotLocalesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListBotLocalesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBotLocalesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}