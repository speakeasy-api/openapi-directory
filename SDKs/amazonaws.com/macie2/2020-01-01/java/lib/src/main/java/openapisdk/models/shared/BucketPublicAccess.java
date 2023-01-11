package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketPublicAccess
 * Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
**/
public class BucketPublicAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectivePermission")
    public EffectivePermissionEnum effectivePermission;
    public BucketPublicAccess withEffectivePermission(EffectivePermissionEnum effectivePermission) {
        this.effectivePermission = effectivePermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionConfiguration")
    public BucketPermissionConfiguration permissionConfiguration;
    public BucketPublicAccess withPermissionConfiguration(BucketPermissionConfiguration permissionConfiguration) {
        this.permissionConfiguration = permissionConfiguration;
        return this;
    }
}