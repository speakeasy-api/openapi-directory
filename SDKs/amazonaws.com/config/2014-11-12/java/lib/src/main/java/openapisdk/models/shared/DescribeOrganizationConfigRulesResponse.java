package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConfigRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeOrganizationConfigRulesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfigRules")
    public OrganizationConfigRule[] organizationConfigRules;
    public DescribeOrganizationConfigRulesResponse withOrganizationConfigRules(OrganizationConfigRule[] organizationConfigRules) {
        this.organizationConfigRules = organizationConfigRules;
        return this;
    }
}