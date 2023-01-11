package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyNameMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_id")
    public String jobId;
    public VerifyNameMeta withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_time")
    public Long jobTime;
    public VerifyNameMeta withJobTime(Long jobTime) {
        this.jobTime = jobTime;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public VerifyNameMeta withQuery(String query) {
        this.query = query;
        return this;
    }
}