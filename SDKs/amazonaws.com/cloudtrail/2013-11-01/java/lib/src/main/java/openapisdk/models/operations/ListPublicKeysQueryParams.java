package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPublicKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListPublicKeysQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}