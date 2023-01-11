package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSamplingRuleRequestBody {
    @JsonProperty("SamplingRuleUpdate")
    public UpdateSamplingRuleRequestBodySamplingRuleUpdate samplingRuleUpdate;
    public UpdateSamplingRuleRequestBody withSamplingRuleUpdate(UpdateSamplingRuleRequestBodySamplingRuleUpdate samplingRuleUpdate) {
        this.samplingRuleUpdate = samplingRuleUpdate;
        return this;
    }
}