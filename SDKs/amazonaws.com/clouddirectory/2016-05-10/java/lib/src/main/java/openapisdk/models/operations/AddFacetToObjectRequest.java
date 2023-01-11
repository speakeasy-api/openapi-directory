package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFacetToObjectRequest {
    public AddFacetToObjectHeaders headers;
    public AddFacetToObjectRequest withHeaders(AddFacetToObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFacetToObjectRequestBody request;
    public AddFacetToObjectRequest withRequest(AddFacetToObjectRequestBody request) {
        this.request = request;
        return this;
    }
}