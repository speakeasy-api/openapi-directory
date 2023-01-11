package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementResultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetStatementResultQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}