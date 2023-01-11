package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdApiKeysRequestBody {
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public PostUsersUserIdApiKeysRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostUsersUserIdApiKeysRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostUsersUserIdApiKeysRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission_set")
    public PostUsersUserIdApiKeysRequestBodyPermissionSetEnum permissionSet;
    public PostUsersUserIdApiKeysRequestBody withPermissionSet(PostUsersUserIdApiKeysRequestBodyPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
}