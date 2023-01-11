package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientFlagTypesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientFlagTypesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}