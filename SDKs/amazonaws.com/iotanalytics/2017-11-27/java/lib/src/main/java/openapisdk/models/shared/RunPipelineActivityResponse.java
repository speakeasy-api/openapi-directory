package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunPipelineActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logResult")
    public String logResult;
    public RunPipelineActivityResponse withLogResult(String logResult) {
        this.logResult = logResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloads")
    public String[] payloads;
    public RunPipelineActivityResponse withPayloads(String[] payloads) {
        this.payloads = payloads;
        return this;
    }
}