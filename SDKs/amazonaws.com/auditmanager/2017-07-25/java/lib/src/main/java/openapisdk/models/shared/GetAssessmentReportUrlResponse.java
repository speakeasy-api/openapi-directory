package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssessmentReportUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preSignedUrl")
    public Url preSignedUrl;
    public GetAssessmentReportUrlResponse withPreSignedUrl(Url preSignedUrl) {
        this.preSignedUrl = preSignedUrl;
        return this;
    }
}