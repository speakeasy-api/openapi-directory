package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMacieSessionRequest {
    public UpdateMacieSessionHeaders headers;
    public UpdateMacieSessionRequest withHeaders(UpdateMacieSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMacieSessionRequestBody request;
    public UpdateMacieSessionRequest withRequest(UpdateMacieSessionRequestBody request) {
        this.request = request;
        return this;
    }
}