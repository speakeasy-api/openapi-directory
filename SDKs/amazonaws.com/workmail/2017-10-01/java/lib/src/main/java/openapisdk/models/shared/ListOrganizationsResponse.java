package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOrganizationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOrganizationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationSummaries")
    public OrganizationSummary[] organizationSummaries;
    public ListOrganizationsResponse withOrganizationSummaries(OrganizationSummary[] organizationSummaries) {
        this.organizationSummaries = organizationSummaries;
        return this;
    }
}