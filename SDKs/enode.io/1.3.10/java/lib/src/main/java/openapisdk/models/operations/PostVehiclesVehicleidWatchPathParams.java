package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVehiclesVehicleidWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public PostVehiclesVehicleidWatchPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}