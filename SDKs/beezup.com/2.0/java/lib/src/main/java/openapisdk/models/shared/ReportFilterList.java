package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportFilterList {
    @JsonProperty("links")
    public ReportFiltersLinks links;
    public ReportFilterList withLinks(ReportFiltersLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("reportFilters")
    public ReportFilterHeader[] reportFilters;
    public ReportFilterList withReportFilters(ReportFilterHeader[] reportFilters) {
        this.reportFilters = reportFilters;
        return this;
    }
}