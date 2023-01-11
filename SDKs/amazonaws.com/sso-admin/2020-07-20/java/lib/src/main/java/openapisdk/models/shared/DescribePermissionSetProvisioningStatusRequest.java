package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePermissionSetProvisioningStatusRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DescribePermissionSetProvisioningStatusRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("ProvisionPermissionSetRequestId")
    public String provisionPermissionSetRequestId;
    public DescribePermissionSetProvisioningStatusRequest withProvisionPermissionSetRequestId(String provisionPermissionSetRequestId) {
        this.provisionPermissionSetRequestId = provisionPermissionSetRequestId;
        return this;
    }
}