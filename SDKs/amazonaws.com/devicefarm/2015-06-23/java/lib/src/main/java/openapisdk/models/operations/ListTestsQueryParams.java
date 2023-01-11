package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTestsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}