package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseManagerReportGeneratorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseManagerReportGeneratorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportGenerators")
    public ReportGenerator[] reportGenerators;
    public ListLicenseManagerReportGeneratorsResponse withReportGenerators(ReportGenerator[] reportGenerators) {
        this.reportGenerators = reportGenerators;
        return this;
    }
}