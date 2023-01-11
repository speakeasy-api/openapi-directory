package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetJobsRequest {
    @JsonProperty("JobNames")
    public String[] jobNames;
    public BatchGetJobsRequest withJobNames(String[] jobNames) {
        this.jobNames = jobNames;
        return this;
    }
}