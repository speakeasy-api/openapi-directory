package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunctionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public DeleteFunctionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}