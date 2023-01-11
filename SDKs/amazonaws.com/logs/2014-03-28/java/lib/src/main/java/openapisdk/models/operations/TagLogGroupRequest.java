package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagLogGroupRequest {
    public TagLogGroupHeaders headers;
    public TagLogGroupRequest withHeaders(TagLogGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagLogGroupRequest request;
    public TagLogGroupRequest withRequest(openapisdk.models.shared.TagLogGroupRequest request) {
        this.request = request;
        return this;
    }
}