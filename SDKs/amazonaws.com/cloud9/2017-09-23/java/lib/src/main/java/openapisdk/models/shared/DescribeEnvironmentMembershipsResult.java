package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEnvironmentMembershipsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public EnvironmentMember[] memberships;
    public DescribeEnvironmentMembershipsResult withMemberships(EnvironmentMember[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeEnvironmentMembershipsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}