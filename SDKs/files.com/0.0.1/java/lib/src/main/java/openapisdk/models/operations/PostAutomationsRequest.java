package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostAutomationsRequestBody request;
    public PostAutomationsRequest withRequest(PostAutomationsRequestBody request) {
        this.request = request;
        return this;
    }
}