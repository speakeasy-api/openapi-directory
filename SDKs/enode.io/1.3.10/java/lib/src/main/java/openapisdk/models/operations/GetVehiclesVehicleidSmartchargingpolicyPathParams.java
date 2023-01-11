package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidSmartchargingpolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public GetVehiclesVehicleidSmartchargingpolicyPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}