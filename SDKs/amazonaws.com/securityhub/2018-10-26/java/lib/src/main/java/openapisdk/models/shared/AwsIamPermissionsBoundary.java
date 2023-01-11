package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamPermissionsBoundary
 * Information about the policy used to set the permissions boundary for an IAM principal.
**/
public class AwsIamPermissionsBoundary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsBoundaryArn")
    public String permissionsBoundaryArn;
    public AwsIamPermissionsBoundary withPermissionsBoundaryArn(String permissionsBoundaryArn) {
        this.permissionsBoundaryArn = permissionsBoundaryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsBoundaryType")
    public String permissionsBoundaryType;
    public AwsIamPermissionsBoundary withPermissionsBoundaryType(String permissionsBoundaryType) {
        this.permissionsBoundaryType = permissionsBoundaryType;
        return this;
    }
}