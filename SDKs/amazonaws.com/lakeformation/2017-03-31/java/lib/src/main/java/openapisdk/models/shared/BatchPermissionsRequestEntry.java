package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchPermissionsRequestEntry
 * A permission to a resource granted by batch operation to the principal.
**/
public class BatchPermissionsRequestEntry {
    @JsonProperty("Id")
    public String id;
    public BatchPermissionsRequestEntry withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public PermissionEnum[] permissions;
    public BatchPermissionsRequestEntry withPermissions(PermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsWithGrantOption")
    public PermissionEnum[] permissionsWithGrantOption;
    public BatchPermissionsRequestEntry withPermissionsWithGrantOption(PermissionEnum[] permissionsWithGrantOption) {
        this.permissionsWithGrantOption = permissionsWithGrantOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Principal")
    public DataLakePrincipal principal;
    public BatchPermissionsRequestEntry withPrincipal(DataLakePrincipal principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resource")
    public Resource resource;
    public BatchPermissionsRequestEntry withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}