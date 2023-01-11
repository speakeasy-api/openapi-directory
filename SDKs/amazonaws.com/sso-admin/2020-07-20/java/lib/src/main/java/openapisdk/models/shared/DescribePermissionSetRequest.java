package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DescribePermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public DescribePermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}