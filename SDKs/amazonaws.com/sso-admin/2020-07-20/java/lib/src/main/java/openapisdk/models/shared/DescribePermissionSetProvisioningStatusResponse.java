package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePermissionSetProvisioningStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionSetProvisioningStatus")
    public PermissionSetProvisioningStatus permissionSetProvisioningStatus;
    public DescribePermissionSetProvisioningStatusResponse withPermissionSetProvisioningStatus(PermissionSetProvisioningStatus permissionSetProvisioningStatus) {
        this.permissionSetProvisioningStatus = permissionSetProvisioningStatus;
        return this;
    }
}