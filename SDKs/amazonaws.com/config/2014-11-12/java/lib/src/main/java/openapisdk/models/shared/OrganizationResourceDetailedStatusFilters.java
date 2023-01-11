package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationResourceDetailedStatusFilters
 * Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
**/
public class OrganizationResourceDetailedStatusFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public OrganizationResourceDetailedStatusFilters withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public OrganizationResourceDetailedStatusEnum status;
    public OrganizationResourceDetailedStatusFilters withStatus(OrganizationResourceDetailedStatusEnum status) {
        this.status = status;
        return this;
    }
}