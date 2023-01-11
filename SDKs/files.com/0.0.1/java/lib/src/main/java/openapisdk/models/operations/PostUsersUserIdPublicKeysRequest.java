package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdPublicKeysRequest {
    public PostUsersUserIdPublicKeysPathParams pathParams;
    public PostUsersUserIdPublicKeysRequest withPathParams(PostUsersUserIdPublicKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUsersUserIdPublicKeysRequestBody request;
    public PostUsersUserIdPublicKeysRequest withRequest(PostUsersUserIdPublicKeysRequestBody request) {
        this.request = request;
        return this;
    }
}