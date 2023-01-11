package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMockRequest {
    public UpdateMockPathParams pathParams;
    public UpdateMockRequest withPathParams(UpdateMockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMockRequestBody request;
    public UpdateMockRequest withRequest(UpdateMockRequestBody request) {
        this.request = request;
        return this;
    }
}