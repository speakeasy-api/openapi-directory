package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateParallelDataRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public UpdateParallelDataRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateParallelDataRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateParallelDataRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ParallelDataConfig")
    public ParallelDataConfig parallelDataConfig;
    public UpdateParallelDataRequest withParallelDataConfig(ParallelDataConfig parallelDataConfig) {
        this.parallelDataConfig = parallelDataConfig;
        return this;
    }
}