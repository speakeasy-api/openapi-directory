package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConfigRuleStatusesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeOrganizationConfigRuleStatusesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeOrganizationConfigRuleStatusesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfigRuleNames")
    public String[] organizationConfigRuleNames;
    public DescribeOrganizationConfigRuleStatusesRequest withOrganizationConfigRuleNames(String[] organizationConfigRuleNames) {
        this.organizationConfigRuleNames = organizationConfigRuleNames;
        return this;
    }
}