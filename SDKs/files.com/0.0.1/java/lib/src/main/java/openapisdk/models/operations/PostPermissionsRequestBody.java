package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPermissionsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public Integer groupId;
    public PostPermissionsRequestBody withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostPermissionsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission")
    public String permission;
    public PostPermissionsRequestBody withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recursive")
    public Boolean recursive;
    public PostPermissionsRequestBody withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostPermissionsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PostPermissionsRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}