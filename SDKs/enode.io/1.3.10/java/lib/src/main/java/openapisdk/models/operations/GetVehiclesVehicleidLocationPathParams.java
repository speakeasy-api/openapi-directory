package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vehicleId")
    public String vehicleId;
    public GetVehiclesVehicleidLocationPathParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}