package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelWorldGenerationJobRequestBody {
    @JsonProperty("job")
    public String job;
    public CancelWorldGenerationJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}