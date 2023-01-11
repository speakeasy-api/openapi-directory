package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachManagedPolicyFromPermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DetachManagedPolicyFromPermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("ManagedPolicyArn")
    public String managedPolicyArn;
    public DetachManagedPolicyFromPermissionSetRequest withManagedPolicyArn(String managedPolicyArn) {
        this.managedPolicyArn = managedPolicyArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public DetachManagedPolicyFromPermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}