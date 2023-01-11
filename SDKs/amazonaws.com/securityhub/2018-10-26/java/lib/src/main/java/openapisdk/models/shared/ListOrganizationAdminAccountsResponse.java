package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOrganizationAdminAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminAccounts")
    public AdminAccount[] adminAccounts;
    public ListOrganizationAdminAccountsResponse withAdminAccounts(AdminAccount[] adminAccounts) {
        this.adminAccounts = adminAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOrganizationAdminAccountsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}