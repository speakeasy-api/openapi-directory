package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourceRequest {
    public TagResourceHeaders headers;
    public TagResourceRequest withHeaders(TagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagResourceInput request;
    public TagResourceRequest withRequest(openapisdk.models.shared.TagResourceInput request) {
        this.request = request;
        return this;
    }
}