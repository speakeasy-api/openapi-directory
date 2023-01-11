package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCapacityProvidersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityProviders")
    public CapacityProvider[] capacityProviders;
    public DescribeCapacityProvidersResponse withCapacityProviders(CapacityProvider[] capacityProviders) {
        this.capacityProviders = capacityProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public DescribeCapacityProvidersResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCapacityProvidersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}