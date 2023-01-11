package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public CreateAliasPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}