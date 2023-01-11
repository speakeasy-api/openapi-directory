package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdApiKeysRequest {
    public PostUsersUserIdApiKeysPathParams pathParams;
    public PostUsersUserIdApiKeysRequest withPathParams(PostUsersUserIdApiKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUsersUserIdApiKeysRequestBody request;
    public PostUsersUserIdApiKeysRequest withRequest(PostUsersUserIdApiKeysRequestBody request) {
        this.request = request;
        return this;
    }
}