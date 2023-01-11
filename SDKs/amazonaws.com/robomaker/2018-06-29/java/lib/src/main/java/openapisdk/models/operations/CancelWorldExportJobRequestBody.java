package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelWorldExportJobRequestBody {
    @JsonProperty("job")
    public String job;
    public CancelWorldExportJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}