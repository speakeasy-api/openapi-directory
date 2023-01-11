package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSamplingRuleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SamplingRuleRecord")
    public SamplingRuleRecord samplingRuleRecord;
    public DeleteSamplingRuleResult withSamplingRuleRecord(SamplingRuleRecord samplingRuleRecord) {
        this.samplingRuleRecord = samplingRuleRecord;
        return this;
    }
}