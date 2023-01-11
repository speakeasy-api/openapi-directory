package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsCreateExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsCreateExecutionPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}