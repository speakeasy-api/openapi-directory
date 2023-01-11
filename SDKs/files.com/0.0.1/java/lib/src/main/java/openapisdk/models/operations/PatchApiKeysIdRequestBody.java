package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeysIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public PatchApiKeysIdRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchApiKeysIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission_set")
    public PatchApiKeysIdRequestBodyPermissionSetEnum permissionSet;
    public PatchApiKeysIdRequestBody withPermissionSet(PatchApiKeysIdRequestBodyPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
}