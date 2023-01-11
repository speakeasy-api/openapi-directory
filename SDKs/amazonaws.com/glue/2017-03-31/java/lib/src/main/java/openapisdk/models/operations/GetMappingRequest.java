package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMappingRequest {
    public GetMappingHeaders headers;
    public GetMappingRequest withHeaders(GetMappingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMappingRequest request;
    public GetMappingRequest withRequest(openapisdk.models.shared.GetMappingRequest request) {
        this.request = request;
        return this;
    }
}