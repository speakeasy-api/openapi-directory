package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cycle
 * A complex type that describes a program cycle.
**/
public class Cycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleType")
    public String cycleType;
    public Cycle withCycleType(String cycleType) {
        this.cycleType = cycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationDate")
    public String evaluationDate;
    public Cycle withEvaluationDate(String evaluationDate) {
        this.evaluationDate = evaluationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMonth")
    public String evaluationMonth;
    public Cycle withEvaluationMonth(String evaluationMonth) {
        this.evaluationMonth = evaluationMonth;
        return this;
    }
}