package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseManagerReportGeneratorsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public ListLicenseManagerReportGeneratorsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListLicenseManagerReportGeneratorsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseManagerReportGeneratorsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}