package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsGroupIdUsersRequest {
    public PostGroupsGroupIdUsersPathParams pathParams;
    public PostGroupsGroupIdUsersRequest withPathParams(PostGroupsGroupIdUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostGroupsGroupIdUsersRequestBody request;
    public PostGroupsGroupIdUsersRequest withRequest(PostGroupsGroupIdUsersRequestBody request) {
        this.request = request;
        return this;
    }
}