package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportFilterHeaderLinks {
    @JsonProperty("self")
    public LinksGetReportFilterLink self;
    public ReportFilterHeaderLinks withSelf(LinksGetReportFilterLink self) {
        this.self = self;
        return this;
    }
}