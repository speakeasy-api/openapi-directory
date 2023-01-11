package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsUpdateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsUpdateTagPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}