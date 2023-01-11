package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleDetailsByRegistrationNumberRequest {
    public GetVehicleDetailsByRegistrationNumberHeaders headers;
    public GetVehicleDetailsByRegistrationNumberRequest withHeaders(GetVehicleDetailsByRegistrationNumberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VehicleRequest request;
    public GetVehicleDetailsByRegistrationNumberRequest withRequest(openapisdk.models.shared.VehicleRequest request) {
        this.request = request;
        return this;
    }
}