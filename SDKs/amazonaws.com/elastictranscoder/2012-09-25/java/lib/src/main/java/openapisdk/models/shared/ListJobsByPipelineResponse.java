package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsByPipelineResponse
 * The <code>ListJobsByPipelineResponse</code> structure.
**/
public class ListJobsByPipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public Job[] jobs;
    public ListJobsByPipelineResponse withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListJobsByPipelineResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}