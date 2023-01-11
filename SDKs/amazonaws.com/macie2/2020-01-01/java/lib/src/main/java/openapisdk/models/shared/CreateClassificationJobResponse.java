package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClassificationJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobArn")
    public String jobArn;
    public CreateClassificationJobResponse withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public CreateClassificationJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}