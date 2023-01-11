package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAvailableManagementCidrRangesRequest {
    @JsonProperty("ManagementCidrRangeConstraint")
    public String managementCidrRangeConstraint;
    public ListAvailableManagementCidrRangesRequest withManagementCidrRangeConstraint(String managementCidrRangeConstraint) {
        this.managementCidrRangeConstraint = managementCidrRangeConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAvailableManagementCidrRangesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAvailableManagementCidrRangesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}