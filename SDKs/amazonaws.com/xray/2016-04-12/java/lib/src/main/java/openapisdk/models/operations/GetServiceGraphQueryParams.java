package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceGraphQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetServiceGraphQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}