package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachmentRequest {
    public GetAttachmentHeaders headers;
    public GetAttachmentRequest withHeaders(GetAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetAttachmentRequestBody request;
    public GetAttachmentRequest withRequest(GetAttachmentRequestBody request) {
        this.request = request;
        return this;
    }
}