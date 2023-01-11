package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsDeleteTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsDeleteTagPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public String tagId;
    public FunctionsDeleteTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}