package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReasonCodeSummary
 * A summary of a finding reason code.
**/
public class ReasonCodeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public FindingReasonCodeEnum name;
    public ReasonCodeSummary withName(FindingReasonCodeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public ReasonCodeSummary withValue(Double value) {
        this.value = value;
        return this;
    }
}