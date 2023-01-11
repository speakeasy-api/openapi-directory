package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsListTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsListTagsPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}