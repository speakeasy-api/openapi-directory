package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelDeploymentJobRequestBody {
    @JsonProperty("job")
    public String job;
    public CancelDeploymentJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}