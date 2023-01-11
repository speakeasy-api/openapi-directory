package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grant
 * Contains information about a grant.
**/
public class Grant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Grantee")
    public Grantee grantee;
    public Grant withGrantee(Grantee grantee) {
        this.grantee = grantee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permission")
    public PermissionEnum permission;
    public Grant withPermission(PermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}