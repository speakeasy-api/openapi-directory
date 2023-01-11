package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSuitesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSuitesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}