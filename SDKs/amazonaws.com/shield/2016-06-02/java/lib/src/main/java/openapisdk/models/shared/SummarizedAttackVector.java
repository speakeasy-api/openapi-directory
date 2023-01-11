package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SummarizedAttackVector
 * A summary of information about the attack.
**/
public class SummarizedAttackVector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VectorCounters")
    public SummarizedCounter[] vectorCounters;
    public SummarizedAttackVector withVectorCounters(SummarizedCounter[] vectorCounters) {
        this.vectorCounters = vectorCounters;
        return this;
    }
    @JsonProperty("VectorType")
    public String vectorType;
    public SummarizedAttackVector withVectorType(String vectorType) {
        this.vectorType = vectorType;
        return this;
    }
}