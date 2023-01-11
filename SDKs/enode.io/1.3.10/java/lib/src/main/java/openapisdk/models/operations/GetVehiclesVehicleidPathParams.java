package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public GetVehiclesVehicleidPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}