package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPermissionSetsProvisionedToAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPermissionSetsProvisionedToAccountResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionSets")
    public String[] permissionSets;
    public ListPermissionSetsProvisionedToAccountResponse withPermissionSets(String[] permissionSets) {
        this.permissionSets = permissionSets;
        return this;
    }
}