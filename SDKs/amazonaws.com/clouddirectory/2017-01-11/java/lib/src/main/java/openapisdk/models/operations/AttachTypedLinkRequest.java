package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachTypedLinkRequest {
    public AttachTypedLinkHeaders headers;
    public AttachTypedLinkRequest withHeaders(AttachTypedLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AttachTypedLinkRequestBody request;
    public AttachTypedLinkRequest withRequest(AttachTypedLinkRequestBody request) {
        this.request = request;
        return this;
    }
}