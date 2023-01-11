package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientInterventionsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientInterventionsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}