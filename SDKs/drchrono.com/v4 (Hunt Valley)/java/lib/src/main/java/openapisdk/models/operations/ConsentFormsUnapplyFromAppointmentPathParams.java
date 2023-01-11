package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsUnapplyFromAppointmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ConsentFormsUnapplyFromAppointmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}