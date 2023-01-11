package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentTemplatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentTargetArns")
    public String[] assessmentTargetArns;
    public ListAssessmentTemplatesRequest withAssessmentTargetArns(String[] assessmentTargetArns) {
        this.assessmentTargetArns = assessmentTargetArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public AssessmentTemplateFilter filter;
    public ListAssessmentTemplatesRequest withFilter(AssessmentTemplateFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAssessmentTemplatesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentTemplatesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}