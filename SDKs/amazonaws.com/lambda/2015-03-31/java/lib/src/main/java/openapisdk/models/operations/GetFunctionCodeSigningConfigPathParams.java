package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionCodeSigningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetFunctionCodeSigningConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}