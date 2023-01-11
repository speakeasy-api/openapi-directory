package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDeploymentJobRequestBody {
    @JsonProperty("job")
    public String job;
    public DescribeDeploymentJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}