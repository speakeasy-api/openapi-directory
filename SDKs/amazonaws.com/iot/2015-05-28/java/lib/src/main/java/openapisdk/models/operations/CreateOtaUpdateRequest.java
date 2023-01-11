package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOtaUpdateRequest {
    public CreateOtaUpdatePathParams pathParams;
    public CreateOtaUpdateRequest withPathParams(CreateOtaUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateOtaUpdateHeaders headers;
    public CreateOtaUpdateRequest withHeaders(CreateOtaUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOtaUpdateRequestBody request;
    public CreateOtaUpdateRequest withRequest(CreateOtaUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}