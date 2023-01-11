package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorldExportJobRequestBody {
    @JsonProperty("job")
    public String job;
    public DescribeWorldExportJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}