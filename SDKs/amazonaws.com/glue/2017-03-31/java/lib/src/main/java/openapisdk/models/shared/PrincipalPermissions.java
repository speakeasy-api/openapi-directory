package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrincipalPermissions
 * Permissions granted to a principal.
**/
public class PrincipalPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public PermissionEnum[] permissions;
    public PrincipalPermissions withPermissions(PermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Principal")
    public DataLakePrincipal principal;
    public PrincipalPermissions withPrincipal(DataLakePrincipal principal) {
        this.principal = principal;
        return this;
    }
}