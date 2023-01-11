package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIndexRequest {
    public CreateIndexHeaders headers;
    public CreateIndexRequest withHeaders(CreateIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateIndexRequestBody request;
    public CreateIndexRequest withRequest(CreateIndexRequestBody request) {
        this.request = request;
        return this;
    }
}