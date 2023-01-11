package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrganizationConfigRuleDetailedStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetOrganizationConfigRuleDetailedStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfigRuleDetailedStatus")
    public MemberAccountStatus[] organizationConfigRuleDetailedStatus;
    public GetOrganizationConfigRuleDetailedStatusResponse withOrganizationConfigRuleDetailedStatus(MemberAccountStatus[] organizationConfigRuleDetailedStatus) {
        this.organizationConfigRuleDetailedStatus = organizationConfigRuleDetailedStatus;
        return this;
    }
}