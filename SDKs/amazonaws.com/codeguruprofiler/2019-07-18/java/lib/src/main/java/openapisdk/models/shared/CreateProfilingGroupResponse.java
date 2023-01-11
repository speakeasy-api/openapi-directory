package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateProfilingGroupResponse
 * The structure representing the createProfilingGroupResponse.
**/
public class CreateProfilingGroupResponse {
    @JsonProperty("profilingGroup")
    public ProfilingGroupDescription profilingGroup;
    public CreateProfilingGroupResponse withProfilingGroup(ProfilingGroupDescription profilingGroup) {
        this.profilingGroup = profilingGroup;
        return this;
    }
}