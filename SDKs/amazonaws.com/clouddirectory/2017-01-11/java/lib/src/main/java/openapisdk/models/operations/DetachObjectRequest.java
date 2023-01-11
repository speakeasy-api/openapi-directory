package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachObjectRequest {
    public DetachObjectHeaders headers;
    public DetachObjectRequest withHeaders(DetachObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DetachObjectRequestBody request;
    public DetachObjectRequest withRequest(DetachObjectRequestBody request) {
        this.request = request;
        return this;
    }
}