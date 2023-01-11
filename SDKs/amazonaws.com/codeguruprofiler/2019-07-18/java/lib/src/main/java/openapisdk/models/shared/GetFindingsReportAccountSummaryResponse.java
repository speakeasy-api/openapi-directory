package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFindingsReportAccountSummaryResponse
 * The structure representing the GetFindingsReportAccountSummaryResponse.
**/
public class GetFindingsReportAccountSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetFindingsReportAccountSummaryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("reportSummaries")
    public FindingsReportSummary[] reportSummaries;
    public GetFindingsReportAccountSummaryResponse withReportSummaries(FindingsReportSummary[] reportSummaries) {
        this.reportSummaries = reportSummaries;
        return this;
    }
}