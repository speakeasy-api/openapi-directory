package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachObjectRequest {
    public AttachObjectHeaders headers;
    public AttachObjectRequest withHeaders(AttachObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AttachObjectRequestBody request;
    public AttachObjectRequest withRequest(AttachObjectRequestBody request) {
        this.request = request;
        return this;
    }
}