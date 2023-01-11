package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestPasswordResetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostRequestPasswordResetSample request;
    public PostRequestPasswordResetRequest withRequest(PostRequestPasswordResetSample request) {
        this.request = request;
        return this;
    }
}