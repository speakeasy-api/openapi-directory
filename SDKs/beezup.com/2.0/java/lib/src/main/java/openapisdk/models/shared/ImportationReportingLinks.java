package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportationReportingLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report")
    public LinksImportationGetReportLink report;
    public ImportationReportingLinks withReport(LinksImportationGetReportLink report) {
        this.report = report;
        return this;
    }
}