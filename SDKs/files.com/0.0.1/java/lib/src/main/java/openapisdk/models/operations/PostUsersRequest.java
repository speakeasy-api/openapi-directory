package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUsersRequestBody request;
    public PostUsersRequest withRequest(PostUsersRequestBody request) {
        this.request = request;
        return this;
    }
}