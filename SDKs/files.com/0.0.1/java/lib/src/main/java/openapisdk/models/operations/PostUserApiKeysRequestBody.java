package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostUserApiKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public PostUserApiKeysRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostUserApiKeysRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostUserApiKeysRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission_set")
    public PostUserApiKeysRequestBodyPermissionSetEnum permissionSet;
    public PostUserApiKeysRequestBody withPermissionSet(PostUserApiKeysRequestBodyPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostUserApiKeysRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}