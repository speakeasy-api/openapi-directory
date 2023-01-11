package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSamplingStatisticSummariesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetSamplingStatisticSummariesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SamplingStatisticSummaries")
    public SamplingStatisticSummary[] samplingStatisticSummaries;
    public GetSamplingStatisticSummariesResult withSamplingStatisticSummaries(SamplingStatisticSummary[] samplingStatisticSummaries) {
        this.samplingStatisticSummaries = samplingStatisticSummaries;
        return this;
    }
}