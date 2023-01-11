package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportFiltersLinks {
    @JsonProperty("save")
    public LinksSaveReportFilterLink save;
    public ReportFiltersLinks withSave(LinksSaveReportFilterLink save) {
        this.save = save;
        return this;
    }
    @JsonProperty("self")
    public LinksGetReportFiltersLink self;
    public ReportFiltersLinks withSelf(LinksGetReportFiltersLink self) {
        this.self = self;
        return this;
    }
}