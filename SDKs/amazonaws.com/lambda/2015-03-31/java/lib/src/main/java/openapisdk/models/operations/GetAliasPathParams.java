package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetAliasPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public GetAliasPathParams withName(String name) {
        this.name = name;
        return this;
    }
}