package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetFunctionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}