package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFacetFromObjectRequest {
    public RemoveFacetFromObjectHeaders headers;
    public RemoveFacetFromObjectRequest withHeaders(RemoveFacetFromObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveFacetFromObjectRequestBody request;
    public RemoveFacetFromObjectRequest withRequest(RemoveFacetFromObjectRequestBody request) {
        this.request = request;
        return this;
    }
}