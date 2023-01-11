package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleOdometerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVehicleOdometerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}