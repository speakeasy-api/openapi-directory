package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MedicationsAppendToPharmacyNotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MedicationsAppendToPharmacyNotePathParams withId(String id) {
        this.id = id;
        return this;
    }
}