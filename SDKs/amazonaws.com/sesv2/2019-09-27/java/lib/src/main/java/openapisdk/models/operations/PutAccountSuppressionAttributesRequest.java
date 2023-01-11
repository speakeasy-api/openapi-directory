package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountSuppressionAttributesRequest {
    public PutAccountSuppressionAttributesHeaders headers;
    public PutAccountSuppressionAttributesRequest withHeaders(PutAccountSuppressionAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountSuppressionAttributesRequestBody request;
    public PutAccountSuppressionAttributesRequest withRequest(PutAccountSuppressionAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}