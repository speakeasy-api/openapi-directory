package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSoftwareUpdatesRequest {
    @JsonProperty("JobId")
    public String jobId;
    public GetSoftwareUpdatesRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}