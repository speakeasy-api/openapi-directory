package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchChargeStationRequest {
    public PatchChargeStationPathParams pathParams;
    public PatchChargeStationRequest withPathParams(PatchChargeStationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Schema1 request;
    public PatchChargeStationRequest withRequest(openapisdk.models.shared.Schema1 request) {
        this.request = request;
        return this;
    }
}