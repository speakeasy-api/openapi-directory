package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePermissionSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionSet")
    public PermissionSet permissionSet;
    public DescribePermissionSetResponse withPermissionSet(PermissionSet permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
}