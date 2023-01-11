package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsByStatusResponse
 *  The <code>ListJobsByStatusResponse</code> structure. 
**/
public class ListJobsByStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public Job[] jobs;
    public ListJobsByStatusResponse withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListJobsByStatusResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}