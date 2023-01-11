package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetExclusionsPreviewRequest {
    @JsonProperty("assessmentTemplateArn")
    public String assessmentTemplateArn;
    public GetExclusionsPreviewRequest withAssessmentTemplateArn(String assessmentTemplateArn) {
        this.assessmentTemplateArn = assessmentTemplateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public LocaleEnum locale;
    public GetExclusionsPreviewRequest withLocale(LocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetExclusionsPreviewRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetExclusionsPreviewRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("previewToken")
    public String previewToken;
    public GetExclusionsPreviewRequest withPreviewToken(String previewToken) {
        this.previewToken = previewToken;
        return this;
    }
}