package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClinicalNoteFieldValuesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}