package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeScalingPoliciesInput
 * Represents the input for a request operation.
**/
public class DescribeScalingPoliciesInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeScalingPoliciesInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeScalingPoliciesInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public DescribeScalingPoliciesInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPoliciesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusFilter")
    public ScalingStatusTypeEnum statusFilter;
    public DescribeScalingPoliciesInput withStatusFilter(ScalingStatusTypeEnum statusFilter) {
        this.statusFilter = statusFilter;
        return this;
    }
}