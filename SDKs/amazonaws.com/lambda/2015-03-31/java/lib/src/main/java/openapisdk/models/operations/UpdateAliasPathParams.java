package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public UpdateAliasPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public UpdateAliasPathParams withName(String name) {
        this.name = name;
        return this;
    }
}