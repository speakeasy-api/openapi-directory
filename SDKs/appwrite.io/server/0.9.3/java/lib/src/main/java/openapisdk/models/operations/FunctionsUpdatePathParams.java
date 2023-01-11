package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsUpdatePathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}