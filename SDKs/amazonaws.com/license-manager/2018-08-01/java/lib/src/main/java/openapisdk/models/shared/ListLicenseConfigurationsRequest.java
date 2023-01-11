package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseConfigurationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public ListLicenseConfigurationsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConfigurationArns")
    public String[] licenseConfigurationArns;
    public ListLicenseConfigurationsRequest withLicenseConfigurationArns(String[] licenseConfigurationArns) {
        this.licenseConfigurationArns = licenseConfigurationArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListLicenseConfigurationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseConfigurationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}