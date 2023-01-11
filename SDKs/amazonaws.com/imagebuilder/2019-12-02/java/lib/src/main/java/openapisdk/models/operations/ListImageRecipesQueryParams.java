package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImageRecipesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListImageRecipesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListImageRecipesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}