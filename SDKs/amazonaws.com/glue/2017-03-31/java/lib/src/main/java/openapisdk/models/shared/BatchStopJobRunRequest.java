package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchStopJobRunRequest {
    @JsonProperty("JobName")
    public String jobName;
    public BatchStopJobRunRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("JobRunIds")
    public String[] jobRunIds;
    public BatchStopJobRunRequest withJobRunIds(String[] jobRunIds) {
        this.jobRunIds = jobRunIds;
        return this;
    }
}