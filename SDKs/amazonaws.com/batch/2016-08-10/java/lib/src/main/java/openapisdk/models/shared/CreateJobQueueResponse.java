package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateJobQueueResponse {
    @JsonProperty("jobQueueArn")
    public String jobQueueArn;
    public CreateJobQueueResponse withJobQueueArn(String jobQueueArn) {
        this.jobQueueArn = jobQueueArn;
        return this;
    }
    @JsonProperty("jobQueueName")
    public String jobQueueName;
    public CreateJobQueueResponse withJobQueueName(String jobQueueName) {
        this.jobQueueName = jobQueueName;
        return this;
    }
}