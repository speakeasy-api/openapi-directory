package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountsForProvisionedPermissionSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public ListAccountsForProvisionedPermissionSetResponse withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountsForProvisionedPermissionSetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}