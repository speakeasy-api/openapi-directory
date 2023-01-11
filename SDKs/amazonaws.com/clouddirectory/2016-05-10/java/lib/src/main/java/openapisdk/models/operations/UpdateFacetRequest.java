package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFacetRequest {
    public UpdateFacetHeaders headers;
    public UpdateFacetRequest withHeaders(UpdateFacetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFacetRequestBody request;
    public UpdateFacetRequest withRequest(UpdateFacetRequestBody request) {
        this.request = request;
        return this;
    }
}