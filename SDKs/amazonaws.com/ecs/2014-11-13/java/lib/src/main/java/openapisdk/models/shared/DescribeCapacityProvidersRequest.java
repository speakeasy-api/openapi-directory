package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCapacityProvidersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityProviders")
    public String[] capacityProviders;
    public DescribeCapacityProvidersRequest withCapacityProviders(String[] capacityProviders) {
        this.capacityProviders = capacityProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public CapacityProviderFieldEnum[] include;
    public DescribeCapacityProvidersRequest withInclude(CapacityProviderFieldEnum[] include) {
        this.include = include;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeCapacityProvidersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCapacityProvidersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}