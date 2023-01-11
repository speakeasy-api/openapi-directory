package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyPasswordChangeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostVerifyPasswordChangeSample request;
    public PostVerifyPasswordChangeRequest withRequest(PostVerifyPasswordChangeSample request) {
        this.request = request;
        return this;
    }
}