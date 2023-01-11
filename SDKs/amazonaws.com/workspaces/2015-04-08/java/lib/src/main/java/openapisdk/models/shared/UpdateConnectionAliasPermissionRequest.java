package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConnectionAliasPermissionRequest {
    @JsonProperty("AliasId")
    public String aliasId;
    public UpdateConnectionAliasPermissionRequest withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonProperty("ConnectionAliasPermission")
    public ConnectionAliasPermission connectionAliasPermission;
    public UpdateConnectionAliasPermissionRequest withConnectionAliasPermission(ConnectionAliasPermission connectionAliasPermission) {
        this.connectionAliasPermission = connectionAliasPermission;
        return this;
    }
}