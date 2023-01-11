package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppointmentsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}