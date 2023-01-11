package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeInstancesOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instances")
    public Instance[] instances;
    public DescribeInstancesOutput withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeInstancesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}