package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomAppointmentFieldsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomAppointmentFieldsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}