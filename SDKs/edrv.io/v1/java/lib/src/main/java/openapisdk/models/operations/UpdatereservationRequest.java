package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatereservationRequest {
    public UpdatereservationPathParams pathParams;
    public UpdatereservationRequest withPathParams(UpdatereservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatereservationRequestBody request;
    public UpdatereservationRequest withRequest(UpdatereservationRequestBody request) {
        this.request = request;
        return this;
    }
}