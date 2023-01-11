package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReportFilterLinks links;
    public ReportFilter withLinks(ReportFilterLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("parameters")
    public ReportFilterParameters parameters;
    public ReportFilter withParameters(ReportFilterParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("reportFilterId")
    public String reportFilterId;
    public ReportFilter withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @JsonProperty("reportFilterName")
    public String reportFilterName;
    public ReportFilter withReportFilterName(String reportFilterName) {
        this.reportFilterName = reportFilterName;
        return this;
    }
}