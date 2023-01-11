package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentProfilesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppointmentProfilesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}