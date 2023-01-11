package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DeletePermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public DeletePermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}