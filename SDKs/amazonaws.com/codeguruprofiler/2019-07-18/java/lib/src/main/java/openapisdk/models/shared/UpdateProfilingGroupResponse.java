package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateProfilingGroupResponse
 * The structure representing the updateProfilingGroupResponse.
**/
public class UpdateProfilingGroupResponse {
    @JsonProperty("profilingGroup")
    public ProfilingGroupDescription profilingGroup;
    public UpdateProfilingGroupResponse withProfilingGroup(ProfilingGroupDescription profilingGroup) {
        this.profilingGroup = profilingGroup;
        return this;
    }
}