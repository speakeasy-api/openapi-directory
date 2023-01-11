package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentTemplateFilter
 * Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
**/
public class AssessmentTemplateFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationRange")
    public DurationRange durationRange;
    public AssessmentTemplateFilter withDurationRange(DurationRange durationRange) {
        this.durationRange = durationRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namePattern")
    public String namePattern;
    public AssessmentTemplateFilter withNamePattern(String namePattern) {
        this.namePattern = namePattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public AssessmentTemplateFilter withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
}