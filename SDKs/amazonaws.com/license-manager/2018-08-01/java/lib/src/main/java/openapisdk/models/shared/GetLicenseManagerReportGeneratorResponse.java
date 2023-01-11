package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLicenseManagerReportGeneratorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportGenerator")
    public ReportGenerator reportGenerator;
    public GetLicenseManagerReportGeneratorResponse withReportGenerator(ReportGenerator reportGenerator) {
        this.reportGenerator = reportGenerator;
        return this;
    }
}