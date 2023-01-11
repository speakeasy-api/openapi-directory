package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppointmentProfilesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}