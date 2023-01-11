package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorldGenerationJobRequestBody {
    @JsonProperty("job")
    public String job;
    public DescribeWorldGenerationJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}