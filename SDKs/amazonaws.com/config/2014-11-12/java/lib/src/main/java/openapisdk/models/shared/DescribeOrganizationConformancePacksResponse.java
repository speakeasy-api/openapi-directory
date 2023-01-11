package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConformancePacksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeOrganizationConformancePacksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConformancePacks")
    public OrganizationConformancePack[] organizationConformancePacks;
    public DescribeOrganizationConformancePacksResponse withOrganizationConformancePacks(OrganizationConformancePack[] organizationConformancePacks) {
        this.organizationConformancePacks = organizationConformancePacks;
        return this;
    }
}