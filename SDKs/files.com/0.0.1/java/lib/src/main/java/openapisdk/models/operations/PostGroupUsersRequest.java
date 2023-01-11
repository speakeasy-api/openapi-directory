package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupUsersRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostGroupUsersRequestBody request;
    public PostGroupUsersRequest withRequest(PostGroupUsersRequestBody request) {
        this.request = request;
        return this;
    }
}