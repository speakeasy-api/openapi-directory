package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFunctionEventInvokeConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public PutFunctionEventInvokeConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}