package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionEventInvokeConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public UpdateFunctionEventInvokeConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}