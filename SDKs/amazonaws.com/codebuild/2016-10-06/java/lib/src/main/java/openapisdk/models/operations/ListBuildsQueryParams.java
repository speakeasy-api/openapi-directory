package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBuildsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}