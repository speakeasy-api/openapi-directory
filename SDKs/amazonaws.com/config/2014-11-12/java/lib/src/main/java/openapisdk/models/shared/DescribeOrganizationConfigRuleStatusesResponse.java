package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConfigRuleStatusesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeOrganizationConfigRuleStatusesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfigRuleStatuses")
    public OrganizationConfigRuleStatus[] organizationConfigRuleStatuses;
    public DescribeOrganizationConfigRuleStatusesResponse withOrganizationConfigRuleStatuses(OrganizationConfigRuleStatus[] organizationConfigRuleStatuses) {
        this.organizationConfigRuleStatuses = organizationConfigRuleStatuses;
        return this;
    }
}