package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigurationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostConfigurationsRequestBody request;
    public PostConfigurationsRequest withRequest(PostConfigurationsRequestBody request) {
        this.request = request;
        return this;
    }
}