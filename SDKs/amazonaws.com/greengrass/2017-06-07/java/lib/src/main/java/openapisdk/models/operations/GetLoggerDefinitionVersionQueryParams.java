package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoggerDefinitionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetLoggerDefinitionVersionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}