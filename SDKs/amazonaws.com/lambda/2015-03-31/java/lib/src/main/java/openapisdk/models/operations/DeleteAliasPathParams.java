package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public DeleteAliasPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public DeleteAliasPathParams withName(String name) {
        this.name = name;
        return this;
    }
}