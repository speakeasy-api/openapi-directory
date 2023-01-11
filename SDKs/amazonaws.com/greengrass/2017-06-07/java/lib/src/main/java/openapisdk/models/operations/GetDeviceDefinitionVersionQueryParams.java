package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceDefinitionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDeviceDefinitionVersionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}