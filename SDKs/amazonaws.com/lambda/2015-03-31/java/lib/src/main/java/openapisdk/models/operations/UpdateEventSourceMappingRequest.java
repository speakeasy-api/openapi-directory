package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEventSourceMappingRequest {
    public UpdateEventSourceMappingPathParams pathParams;
    public UpdateEventSourceMappingRequest withPathParams(UpdateEventSourceMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEventSourceMappingHeaders headers;
    public UpdateEventSourceMappingRequest withHeaders(UpdateEventSourceMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEventSourceMappingRequestBody request;
    public UpdateEventSourceMappingRequest withRequest(UpdateEventSourceMappingRequestBody request) {
        this.request = request;
        return this;
    }
}