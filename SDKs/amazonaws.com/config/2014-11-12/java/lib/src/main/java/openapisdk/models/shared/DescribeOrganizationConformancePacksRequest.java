package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConformancePacksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeOrganizationConformancePacksRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeOrganizationConformancePacksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConformancePackNames")
    public String[] organizationConformancePackNames;
    public DescribeOrganizationConformancePacksRequest withOrganizationConformancePackNames(String[] organizationConformancePackNames) {
        this.organizationConformancePackNames = organizationConformancePackNames;
        return this;
    }
}