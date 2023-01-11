package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVehiclesVehicleidChargingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public PostVehiclesVehicleidChargingPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}