package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetPolicyPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}