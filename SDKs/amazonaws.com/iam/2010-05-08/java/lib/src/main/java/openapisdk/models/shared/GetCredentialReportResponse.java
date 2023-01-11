package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * GetCredentialReportResponse
 * Contains the response to a successful <a>GetCredentialReport</a> request. 
**/
public class GetCredentialReportResponse {
    public String content;
    public GetCredentialReportResponse withContent(String content) {
        this.content = content;
        return this;
    }
    public OffsetDateTime generatedTime;
    public GetCredentialReportResponse withGeneratedTime(OffsetDateTime generatedTime) {
        this.generatedTime = generatedTime;
        return this;
    }
    public ReportFormatTypeEnum reportFormat;
    public GetCredentialReportResponse withReportFormat(ReportFormatTypeEnum reportFormat) {
        this.reportFormat = reportFormat;
        return this;
    }
}