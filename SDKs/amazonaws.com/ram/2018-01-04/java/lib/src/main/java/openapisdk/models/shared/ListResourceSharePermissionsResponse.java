package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourceSharePermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListResourceSharePermissionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public ResourceSharePermissionSummary[] permissions;
    public ListResourceSharePermissionsResponse withPermissions(ResourceSharePermissionSummary[] permissions) {
        this.permissions = permissions;
        return this;
    }
}