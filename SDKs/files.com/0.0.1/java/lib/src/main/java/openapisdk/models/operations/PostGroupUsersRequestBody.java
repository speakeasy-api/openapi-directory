package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupUsersRequestBody {
    @SpeakeasyMetadata("multipartForm:name=admin")
    public Boolean admin;
    public PostGroupUsersRequestBody withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public Integer groupId;
    public PostGroupUsersRequestBody withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostGroupUsersRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}