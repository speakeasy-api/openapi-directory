package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPhysicalExamsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientPhysicalExamsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}