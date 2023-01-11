package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateResourceSharePermissionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AssociateResourceSharePermissionRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("permissionArn")
    public String permissionArn;
    public AssociateResourceSharePermissionRequestBody withPermissionArn(String permissionArn) {
        this.permissionArn = permissionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionVersion")
    public Long permissionVersion;
    public AssociateResourceSharePermissionRequestBody withPermissionVersion(Long permissionVersion) {
        this.permissionVersion = permissionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replace")
    public Boolean replace;
    public AssociateResourceSharePermissionRequestBody withReplace(Boolean replace) {
        this.replace = replace;
        return this;
    }
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public AssociateResourceSharePermissionRequestBody withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
}