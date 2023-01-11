package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeInstancesResult
 * Contains the response to a <code>DescribeInstances</code> request.
**/
public class DescribeInstancesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instances")
    public Instance[] instances;
    public DescribeInstancesResult withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
}