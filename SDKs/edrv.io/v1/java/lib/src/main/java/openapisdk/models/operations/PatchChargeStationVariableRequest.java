package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchChargeStationVariableRequest {
    public PatchChargeStationVariablePathParams pathParams;
    public PatchChargeStationVariableRequest withPathParams(PatchChargeStationVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchChargeStationVariableRequestBody request;
    public PatchChargeStationVariableRequest withRequest(PatchChargeStationVariableRequestBody request) {
        this.request = request;
        return this;
    }
}