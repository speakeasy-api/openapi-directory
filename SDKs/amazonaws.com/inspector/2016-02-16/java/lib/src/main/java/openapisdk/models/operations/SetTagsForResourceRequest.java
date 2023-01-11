package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTagsForResourceRequest {
    public SetTagsForResourceHeaders headers;
    public SetTagsForResourceRequest withHeaders(SetTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetTagsForResourceRequest request;
    public SetTagsForResourceRequest withRequest(openapisdk.models.shared.SetTagsForResourceRequest request) {
        this.request = request;
        return this;
    }
}