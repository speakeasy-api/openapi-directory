package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProfilingGroupsResponse
 * The structure representing the listProfilingGroupsResponse.
**/
public class ListProfilingGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProfilingGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("profilingGroupNames")
    public String[] profilingGroupNames;
    public ListProfilingGroupsResponse withProfilingGroupNames(String[] profilingGroupNames) {
        this.profilingGroupNames = profilingGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilingGroups")
    public ProfilingGroupDescription[] profilingGroups;
    public ListProfilingGroupsResponse withProfilingGroups(ProfilingGroupDescription[] profilingGroups) {
        this.profilingGroups = profilingGroups;
        return this;
    }
}