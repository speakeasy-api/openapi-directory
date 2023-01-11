package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFacetRequest {
    public GetFacetHeaders headers;
    public GetFacetRequest withHeaders(GetFacetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetFacetRequestBody request;
    public GetFacetRequest withRequest(GetFacetRequestBody request) {
        this.request = request;
        return this;
    }
}