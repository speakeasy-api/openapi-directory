package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldTypesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClinicalNoteFieldTypesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}