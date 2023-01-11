package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ControlChargerChargingRequest {
    public ControlChargerChargingPathParams pathParams;
    public ControlChargerChargingRequest withPathParams(ControlChargerChargingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ControlChargerChargingRequestBody request;
    public ControlChargerChargingRequest withRequest(ControlChargerChargingRequestBody request) {
        this.request = request;
        return this;
    }
    public ControlChargerChargingSecurity security;
    public ControlChargerChargingRequest withSecurity(ControlChargerChargingSecurity security) {
        this.security = security;
        return this;
    }
}