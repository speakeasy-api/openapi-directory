package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRepositoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListRepositoriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}