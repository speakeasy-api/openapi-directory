package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientMessagesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientMessagesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}