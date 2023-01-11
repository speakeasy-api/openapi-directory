package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyUpdateCurrentRequestBody {
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public ApiKeyUpdateCurrentRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public ApiKeyUpdateCurrentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=permission_set")
    public ApiKeyUpdateCurrentRequestBodyPermissionSetEnum permissionSet;
    public ApiKeyUpdateCurrentRequestBody withPermissionSet(ApiKeyUpdateCurrentRequestBodyPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
}