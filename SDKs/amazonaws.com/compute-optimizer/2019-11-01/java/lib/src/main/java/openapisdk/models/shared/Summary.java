package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Summary
 * The summary of a recommendation.
**/
public class Summary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public FindingEnum name;
    public Summary withName(FindingEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCodeSummaries")
    public ReasonCodeSummary[] reasonCodeSummaries;
    public Summary withReasonCodeSummaries(ReasonCodeSummary[] reasonCodeSummaries) {
        this.reasonCodeSummaries = reasonCodeSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public Summary withValue(Double value) {
        this.value = value;
        return this;
    }
}