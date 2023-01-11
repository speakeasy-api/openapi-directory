package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAssessmentReportRequest {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public GetAssessmentReportRequest withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
    @JsonProperty("reportFileFormat")
    public ReportFileFormatEnum reportFileFormat;
    public GetAssessmentReportRequest withReportFileFormat(ReportFileFormatEnum reportFileFormat) {
        this.reportFileFormat = reportFileFormat;
        return this;
    }
    @JsonProperty("reportType")
    public ReportTypeEnum reportType;
    public GetAssessmentReportRequest withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}