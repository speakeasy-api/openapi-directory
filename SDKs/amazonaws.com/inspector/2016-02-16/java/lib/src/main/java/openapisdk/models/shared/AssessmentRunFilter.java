package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentRunFilter
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
**/
public class AssessmentRunFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTimeRange")
    public TimestampRange completionTimeRange;
    public AssessmentRunFilter withCompletionTimeRange(TimestampRange completionTimeRange) {
        this.completionTimeRange = completionTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationRange")
    public DurationRange durationRange;
    public AssessmentRunFilter withDurationRange(DurationRange durationRange) {
        this.durationRange = durationRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namePattern")
    public String namePattern;
    public AssessmentRunFilter withNamePattern(String namePattern) {
        this.namePattern = namePattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public AssessmentRunFilter withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeRange")
    public TimestampRange startTimeRange;
    public AssessmentRunFilter withStartTimeRange(TimestampRange startTimeRange) {
        this.startTimeRange = startTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateChangeTimeRange")
    public TimestampRange stateChangeTimeRange;
    public AssessmentRunFilter withStateChangeTimeRange(TimestampRange stateChangeTimeRange) {
        this.stateChangeTimeRange = stateChangeTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("states")
    public AssessmentRunStateEnum[] states;
    public AssessmentRunFilter withStates(AssessmentRunStateEnum[] states) {
        this.states = states;
        return this;
    }
}