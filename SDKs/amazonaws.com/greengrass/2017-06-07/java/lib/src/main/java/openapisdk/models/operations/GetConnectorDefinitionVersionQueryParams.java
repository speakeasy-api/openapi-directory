package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorDefinitionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetConnectorDefinitionVersionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}