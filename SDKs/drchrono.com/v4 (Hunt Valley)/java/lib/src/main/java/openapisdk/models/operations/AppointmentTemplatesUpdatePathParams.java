package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppointmentTemplatesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}