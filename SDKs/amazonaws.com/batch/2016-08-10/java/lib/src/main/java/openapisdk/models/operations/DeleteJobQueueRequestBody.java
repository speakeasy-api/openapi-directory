package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteJobQueueRequestBody {
    @JsonProperty("jobQueue")
    public String jobQueue;
    public DeleteJobQueueRequestBody withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
}