package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleChargestatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public GetVehicleChargestatePathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}