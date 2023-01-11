package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachTypedLinkRequest {
    public DetachTypedLinkHeaders headers;
    public DetachTypedLinkRequest withHeaders(DetachTypedLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DetachTypedLinkRequestBody request;
    public DetachTypedLinkRequest withRequest(DetachTypedLinkRequestBody request) {
        this.request = request;
        return this;
    }
}