package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientMessagesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientMessagesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}