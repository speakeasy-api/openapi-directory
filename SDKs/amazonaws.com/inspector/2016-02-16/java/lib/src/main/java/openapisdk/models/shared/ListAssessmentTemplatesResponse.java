package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentTemplatesResponse {
    @JsonProperty("assessmentTemplateArns")
    public String[] assessmentTemplateArns;
    public ListAssessmentTemplatesResponse withAssessmentTemplateArns(String[] assessmentTemplateArns) {
        this.assessmentTemplateArns = assessmentTemplateArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}