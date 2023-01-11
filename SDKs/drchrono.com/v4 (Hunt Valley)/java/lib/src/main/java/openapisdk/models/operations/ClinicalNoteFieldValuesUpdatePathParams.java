package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClinicalNoteFieldValuesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}