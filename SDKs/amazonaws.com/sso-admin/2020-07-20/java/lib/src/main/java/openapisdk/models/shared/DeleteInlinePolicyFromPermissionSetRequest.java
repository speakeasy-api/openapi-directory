package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInlinePolicyFromPermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DeleteInlinePolicyFromPermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public DeleteInlinePolicyFromPermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}