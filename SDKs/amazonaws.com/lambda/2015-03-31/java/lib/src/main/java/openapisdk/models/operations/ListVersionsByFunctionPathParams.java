package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVersionsByFunctionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public ListVersionsByFunctionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}