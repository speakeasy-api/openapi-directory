package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteJobRequestBody {
    @JsonProperty("jobID")
    public String jobID;
    public DeleteJobRequestBody withJobId(String jobID) {
        this.jobID = jobID;
        return this;
    }
}