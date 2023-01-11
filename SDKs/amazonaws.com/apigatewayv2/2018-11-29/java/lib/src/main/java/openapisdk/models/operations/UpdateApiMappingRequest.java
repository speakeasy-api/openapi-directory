package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiMappingRequest {
    public UpdateApiMappingPathParams pathParams;
    public UpdateApiMappingRequest withPathParams(UpdateApiMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateApiMappingHeaders headers;
    public UpdateApiMappingRequest withHeaders(UpdateApiMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApiMappingRequestBody request;
    public UpdateApiMappingRequest withRequest(UpdateApiMappingRequestBody request) {
        this.request = request;
        return this;
    }
}