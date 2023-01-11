package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVehiclesVehicleidSmartchargingpolicyRequest {
    public PutVehiclesVehicleidSmartchargingpolicyPathParams pathParams;
    public PutVehiclesVehicleidSmartchargingpolicyRequest withPathParams(PutVehiclesVehicleidSmartchargingpolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutVehiclesVehicleidSmartchargingpolicyRequestBody request;
    public PutVehiclesVehicleidSmartchargingpolicyRequest withRequest(PutVehiclesVehicleidSmartchargingpolicyRequestBody request) {
        this.request = request;
        return this;
    }
    public PutVehiclesVehicleidSmartchargingpolicySecurity security;
    public PutVehiclesVehicleidSmartchargingpolicyRequest withSecurity(PutVehiclesVehicleidSmartchargingpolicySecurity security) {
        this.security = security;
        return this;
    }
}