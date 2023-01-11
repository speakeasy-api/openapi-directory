package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventSourceMappingRequest {
    public CreateEventSourceMappingHeaders headers;
    public CreateEventSourceMappingRequest withHeaders(CreateEventSourceMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEventSourceMappingRequestBody request;
    public CreateEventSourceMappingRequest withRequest(CreateEventSourceMappingRequestBody request) {
        this.request = request;
        return this;
    }
}