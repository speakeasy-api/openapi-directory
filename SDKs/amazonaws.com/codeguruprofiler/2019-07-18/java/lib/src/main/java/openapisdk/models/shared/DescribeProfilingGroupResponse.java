package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeProfilingGroupResponse
 * The structure representing the describeProfilingGroupResponse.
**/
public class DescribeProfilingGroupResponse {
    @JsonProperty("profilingGroup")
    public ProfilingGroupDescription profilingGroup;
    public DescribeProfilingGroupResponse withProfilingGroup(ProfilingGroupDescription profilingGroup) {
        this.profilingGroup = profilingGroup;
        return this;
    }
}