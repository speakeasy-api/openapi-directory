package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsDeletePathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}