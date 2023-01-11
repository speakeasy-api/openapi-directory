package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActionTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListActionTypesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}