package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateResourceSharePermissionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public DisassociateResourceSharePermissionRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("permissionArn")
    public String permissionArn;
    public DisassociateResourceSharePermissionRequestBody withPermissionArn(String permissionArn) {
        this.permissionArn = permissionArn;
        return this;
    }
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public DisassociateResourceSharePermissionRequestBody withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
}