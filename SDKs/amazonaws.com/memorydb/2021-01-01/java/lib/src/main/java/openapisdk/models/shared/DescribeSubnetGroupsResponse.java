package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSubnetGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSubnetGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroups")
    public SubnetGroup[] subnetGroups;
    public DescribeSubnetGroupsResponse withSubnetGroups(SubnetGroup[] subnetGroups) {
        this.subnetGroups = subnetGroups;
        return this;
    }
}