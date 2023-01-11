package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunctionEventInvokeConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public DeleteFunctionEventInvokeConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}