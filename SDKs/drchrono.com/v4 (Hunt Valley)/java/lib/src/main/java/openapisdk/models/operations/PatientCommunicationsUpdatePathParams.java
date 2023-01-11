package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientCommunicationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientCommunicationsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}