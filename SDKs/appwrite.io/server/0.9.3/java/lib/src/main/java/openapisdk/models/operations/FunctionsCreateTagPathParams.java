package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsCreateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsCreateTagPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}