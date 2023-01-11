package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribePermissionsResult
 * Contains the response to a <code>DescribePermissions</code> request.
**/
public class DescribePermissionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public Permission[] permissions;
    public DescribePermissionsResult withPermissions(Permission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}