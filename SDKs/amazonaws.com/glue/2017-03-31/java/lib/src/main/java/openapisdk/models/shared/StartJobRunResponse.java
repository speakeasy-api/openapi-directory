package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartJobRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRunId")
    public String jobRunId;
    public StartJobRunResponse withJobRunId(String jobRunId) {
        this.jobRunId = jobRunId;
        return this;
    }
}