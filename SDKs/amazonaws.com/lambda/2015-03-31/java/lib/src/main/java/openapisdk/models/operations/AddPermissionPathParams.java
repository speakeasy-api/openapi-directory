package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public AddPermissionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}