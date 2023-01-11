package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcesRequest {
    public TagResourcesHeaders headers;
    public TagResourcesRequest withHeaders(TagResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagResourcesInput request;
    public TagResourcesRequest withRequest(openapisdk.models.shared.TagResourcesInput request) {
        this.request = request;
        return this;
    }
}