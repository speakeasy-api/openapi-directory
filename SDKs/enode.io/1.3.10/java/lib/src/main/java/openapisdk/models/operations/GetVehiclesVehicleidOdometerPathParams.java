package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidOdometerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public GetVehiclesVehicleidOdometerPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}