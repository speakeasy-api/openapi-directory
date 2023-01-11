package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersGroupsRequest {
    public PostContainersGroupsHeaders headers;
    public PostContainersGroupsRequest withHeaders(PostContainersGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostContainersGroupsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}