package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrganizationConformancePackDetailedStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public OrganizationResourceDetailedStatusFilters filters;
    public GetOrganizationConformancePackDetailedStatusRequest withFilters(OrganizationResourceDetailedStatusFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetOrganizationConformancePackDetailedStatusRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetOrganizationConformancePackDetailedStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("OrganizationConformancePackName")
    public String organizationConformancePackName;
    public GetOrganizationConformancePackDetailedStatusRequest withOrganizationConformancePackName(String organizationConformancePackName) {
        this.organizationConformancePackName = organizationConformancePackName;
        return this;
    }
}