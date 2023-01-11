package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupUsersIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=admin")
    public Boolean admin;
    public PatchGroupUsersIdRequestBody withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public Integer groupId;
    public PatchGroupUsersIdRequestBody withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PatchGroupUsersIdRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}