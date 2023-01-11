package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppointmentsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}