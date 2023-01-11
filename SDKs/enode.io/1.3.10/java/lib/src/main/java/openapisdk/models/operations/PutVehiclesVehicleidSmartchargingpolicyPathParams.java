package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVehiclesVehicleidSmartchargingpolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public PutVehiclesVehicleidSmartchargingpolicyPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}