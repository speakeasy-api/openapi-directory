package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSamplingRulesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetSamplingRulesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SamplingRuleRecords")
    public SamplingRuleRecord[] samplingRuleRecords;
    public GetSamplingRulesResult withSamplingRuleRecords(SamplingRuleRecord[] samplingRuleRecords) {
        this.samplingRuleRecords = samplingRuleRecords;
        return this;
    }
}