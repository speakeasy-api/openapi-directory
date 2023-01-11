package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetFunctionConfigurationPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}