package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPermissionSetProvisioningStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPermissionSetProvisioningStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionSetsProvisioningStatus")
    public PermissionSetProvisioningStatusMetadata[] permissionSetsProvisioningStatus;
    public ListPermissionSetProvisioningStatusResponse withPermissionSetsProvisioningStatus(PermissionSetProvisioningStatusMetadata[] permissionSetsProvisioningStatus) {
        this.permissionSetsProvisioningStatus = permissionSetsProvisioningStatus;
        return this;
    }
}