package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutItemsRequest {
    public PutItemsHeaders headers;
    public PutItemsRequest withHeaders(PutItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutItemsRequestBody request;
    public PutItemsRequest withRequest(PutItemsRequestBody request) {
        this.request = request;
        return this;
    }
}