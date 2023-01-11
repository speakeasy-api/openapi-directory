package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagProjectRequest {
    public TagProjectHeaders headers;
    public TagProjectRequest withHeaders(TagProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagProjectRequest request;
    public TagProjectRequest withRequest(openapisdk.models.shared.TagProjectRequest request) {
        this.request = request;
        return this;
    }
}