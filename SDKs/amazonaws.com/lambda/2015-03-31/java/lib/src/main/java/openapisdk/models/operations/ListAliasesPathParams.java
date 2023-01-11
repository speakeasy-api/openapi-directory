package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAliasesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public ListAliasesPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}