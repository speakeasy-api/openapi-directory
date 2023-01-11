package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsGetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsGetTagPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public String tagId;
    public FunctionsGetTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}