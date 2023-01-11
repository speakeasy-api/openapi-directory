package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutItemRequest {
    public PutItemHeaders headers;
    public PutItemRequest withHeaders(PutItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutItemInput request;
    public PutItemRequest withRequest(openapisdk.models.shared.PutItemInput request) {
        this.request = request;
        return this;
    }
}