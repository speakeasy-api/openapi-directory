package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdAs2KeysRequest {
    public PostUsersUserIdAs2KeysPathParams pathParams;
    public PostUsersUserIdAs2KeysRequest withPathParams(PostUsersUserIdAs2KeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUsersUserIdAs2KeysRequestBody request;
    public PostUsersUserIdAs2KeysRequest withRequest(PostUsersUserIdAs2KeysRequestBody request) {
        this.request = request;
        return this;
    }
}