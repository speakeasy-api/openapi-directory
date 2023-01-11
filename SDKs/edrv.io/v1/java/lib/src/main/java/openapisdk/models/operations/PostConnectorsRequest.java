package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConnectorsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostConnectorsRequestBody request;
    public PostConnectorsRequest withRequest(PostConnectorsRequestBody request) {
        this.request = request;
        return this;
    }
}