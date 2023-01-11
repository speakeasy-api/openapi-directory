package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientInterventionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientInterventionsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}