package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolversByFunctionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListResolversByFunctionPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public ListResolversByFunctionPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}