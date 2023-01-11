package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlaceIndexRequest {
    public CreatePlaceIndexHeaders headers;
    public CreatePlaceIndexRequest withHeaders(CreatePlaceIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePlaceIndexRequestBody request;
    public CreatePlaceIndexRequest withRequest(CreatePlaceIndexRequestBody request) {
        this.request = request;
        return this;
    }
}