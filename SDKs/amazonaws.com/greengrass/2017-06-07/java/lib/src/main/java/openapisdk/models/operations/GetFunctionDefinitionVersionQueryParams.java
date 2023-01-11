package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionDefinitionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetFunctionDefinitionVersionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}