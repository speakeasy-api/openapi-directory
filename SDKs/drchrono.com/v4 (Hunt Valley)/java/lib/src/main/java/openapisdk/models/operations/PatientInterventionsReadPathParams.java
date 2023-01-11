package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientInterventionsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientInterventionsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}