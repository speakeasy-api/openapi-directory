package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GrantPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GrantPermissionsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("Permissions")
    public PermissionEnum[] permissions;
    public GrantPermissionsRequest withPermissions(PermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsWithGrantOption")
    public PermissionEnum[] permissionsWithGrantOption;
    public GrantPermissionsRequest withPermissionsWithGrantOption(PermissionEnum[] permissionsWithGrantOption) {
        this.permissionsWithGrantOption = permissionsWithGrantOption;
        return this;
    }
    @JsonProperty("Principal")
    public DataLakePrincipal principal;
    public GrantPermissionsRequest withPrincipal(DataLakePrincipal principal) {
        this.principal = principal;
        return this;
    }
    @JsonProperty("Resource")
    public Resource resource;
    public GrantPermissionsRequest withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}