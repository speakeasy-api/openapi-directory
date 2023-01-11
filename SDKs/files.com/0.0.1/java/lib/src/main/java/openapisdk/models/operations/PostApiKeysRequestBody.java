package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostApiKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public PostApiKeysRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostApiKeysRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostApiKeysRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission_set")
    public PostApiKeysRequestBodyPermissionSetEnum permissionSet;
    public PostApiKeysRequestBody withPermissionSet(PostApiKeysRequestBodyPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostApiKeysRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}