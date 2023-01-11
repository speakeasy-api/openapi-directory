package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLocationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLocationsRequestBody request;
    public PostLocationsRequest withRequest(PostLocationsRequestBody request) {
        this.request = request;
        return this;
    }
}