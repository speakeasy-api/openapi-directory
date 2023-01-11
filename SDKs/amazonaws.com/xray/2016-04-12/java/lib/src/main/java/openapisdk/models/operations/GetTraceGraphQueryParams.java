package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTraceGraphQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetTraceGraphQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}