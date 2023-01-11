package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentTargetFilter
 * Used as the request parameter in the <a>ListAssessmentTargets</a> action.
**/
public class AssessmentTargetFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentTargetNamePattern")
    public String assessmentTargetNamePattern;
    public AssessmentTargetFilter withAssessmentTargetNamePattern(String assessmentTargetNamePattern) {
        this.assessmentTargetNamePattern = assessmentTargetNamePattern;
        return this;
    }
}