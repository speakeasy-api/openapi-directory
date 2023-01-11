package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public InvokePathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}