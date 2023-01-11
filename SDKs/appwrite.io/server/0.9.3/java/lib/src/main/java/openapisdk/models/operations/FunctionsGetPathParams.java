package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsGetPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}