package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrganizationConformancePackDetailedStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetOrganizationConformancePackDetailedStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConformancePackDetailedStatuses")
    public OrganizationConformancePackDetailedStatus[] organizationConformancePackDetailedStatuses;
    public GetOrganizationConformancePackDetailedStatusResponse withOrganizationConformancePackDetailedStatuses(OrganizationConformancePackDetailedStatus[] organizationConformancePackDetailedStatuses) {
        this.organizationConformancePackDetailedStatuses = organizationConformancePackDetailedStatuses;
        return this;
    }
}