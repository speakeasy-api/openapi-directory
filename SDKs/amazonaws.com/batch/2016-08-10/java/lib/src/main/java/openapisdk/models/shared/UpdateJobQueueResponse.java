package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateJobQueueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQueueArn")
    public String jobQueueArn;
    public UpdateJobQueueResponse withJobQueueArn(String jobQueueArn) {
        this.jobQueueArn = jobQueueArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQueueName")
    public String jobQueueName;
    public UpdateJobQueueResponse withJobQueueName(String jobQueueName) {
        this.jobQueueName = jobQueueName;
        return this;
    }
}