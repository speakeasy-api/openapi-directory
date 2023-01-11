package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClinicalNoteFieldValuesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}