package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFunctionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public UploadFunctionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}