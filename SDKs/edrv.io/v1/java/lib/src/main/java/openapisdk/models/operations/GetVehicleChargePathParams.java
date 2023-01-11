package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVehicleChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}