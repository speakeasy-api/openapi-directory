package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RevokePermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public RevokePermissionsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("Permissions")
    public PermissionEnum[] permissions;
    public RevokePermissionsRequest withPermissions(PermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsWithGrantOption")
    public PermissionEnum[] permissionsWithGrantOption;
    public RevokePermissionsRequest withPermissionsWithGrantOption(PermissionEnum[] permissionsWithGrantOption) {
        this.permissionsWithGrantOption = permissionsWithGrantOption;
        return this;
    }
    @JsonProperty("Principal")
    public DataLakePrincipal principal;
    public RevokePermissionsRequest withPrincipal(DataLakePrincipal principal) {
        this.principal = principal;
        return this;
    }
    @JsonProperty("Resource")
    public Resource resource;
    public RevokePermissionsRequest withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}