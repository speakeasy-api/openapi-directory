package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListThingRegistrationTaskReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListThingRegistrationTaskReportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
    public ReportTypeEnum reportType;
    public ListThingRegistrationTaskReportsResponse withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLinks")
    public String[] resourceLinks;
    public ListThingRegistrationTaskReportsResponse withResourceLinks(String[] resourceLinks) {
        this.resourceLinks = resourceLinks;
        return this;
    }
}