package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardsProfile
 * A complex type that defines a seller profile.
**/
public class StandardsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Cycle cycle;
    public StandardsProfile withCycle(Cycle cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultProgram")
    public Boolean defaultProgram;
    public StandardsProfile withDefaultProgram(Boolean defaultProgram) {
        this.defaultProgram = defaultProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationReason")
    public String evaluationReason;
    public StandardsProfile withEvaluationReason(String evaluationReason) {
        this.evaluationReason = evaluationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public StandardsProfile withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("program")
    public String program;
    public StandardsProfile withProgram(String program) {
        this.program = program;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardsLevel")
    public String standardsLevel;
    public StandardsProfile withStandardsLevel(String standardsLevel) {
        this.standardsLevel = standardsLevel;
        return this;
    }
}