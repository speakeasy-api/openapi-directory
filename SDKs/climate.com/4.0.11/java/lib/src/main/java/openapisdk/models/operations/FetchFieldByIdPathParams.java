package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFieldByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fieldId")
    public String fieldId;
    public FetchFieldByIdPathParams withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
}