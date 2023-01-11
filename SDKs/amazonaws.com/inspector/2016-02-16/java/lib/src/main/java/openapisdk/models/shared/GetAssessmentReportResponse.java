package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssessmentReportResponse {
    @JsonProperty("status")
    public ReportStatusEnum status;
    public GetAssessmentReportResponse withStatus(ReportStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetAssessmentReportResponse withUrl(String url) {
        this.url = url;
        return this;
    }
}