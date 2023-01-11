package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public UpdateFunctionCodePathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}