package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateReportGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportGroup")
    public ReportGroup reportGroup;
    public UpdateReportGroupOutput withReportGroup(ReportGroup reportGroup) {
        this.reportGroup = reportGroup;
        return this;
    }
}