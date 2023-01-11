package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsListExecutionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsListExecutionsPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}