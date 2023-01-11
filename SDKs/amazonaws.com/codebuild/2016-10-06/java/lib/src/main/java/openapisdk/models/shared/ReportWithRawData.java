package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportWithRawData
 * Contains the unmodified data for the report. For more information, see .
**/
public class ReportWithRawData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public ReportWithRawData withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportArn")
    public String reportArn;
    public ReportWithRawData withReportArn(String reportArn) {
        this.reportArn = reportArn;
        return this;
    }
}