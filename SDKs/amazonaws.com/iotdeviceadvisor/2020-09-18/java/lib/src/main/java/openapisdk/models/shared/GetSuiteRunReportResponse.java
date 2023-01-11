package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSuiteRunReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualificationReportDownloadUrl")
    public String qualificationReportDownloadUrl;
    public GetSuiteRunReportResponse withQualificationReportDownloadUrl(String qualificationReportDownloadUrl) {
        this.qualificationReportDownloadUrl = qualificationReportDownloadUrl;
        return this;
    }
}