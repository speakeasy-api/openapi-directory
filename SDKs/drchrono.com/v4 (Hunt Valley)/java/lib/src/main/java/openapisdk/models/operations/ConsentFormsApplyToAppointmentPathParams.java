package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsApplyToAppointmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ConsentFormsApplyToAppointmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}