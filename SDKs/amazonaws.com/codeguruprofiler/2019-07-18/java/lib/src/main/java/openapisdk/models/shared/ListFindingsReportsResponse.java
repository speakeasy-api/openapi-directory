package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsReportsResponse
 * The structure representing the ListFindingsReportsResponse.
**/
public class ListFindingsReportsResponse {
    @JsonProperty("findingsReportSummaries")
    public FindingsReportSummary[] findingsReportSummaries;
    public ListFindingsReportsResponse withFindingsReportSummaries(FindingsReportSummary[] findingsReportSummaries) {
        this.findingsReportSummaries = findingsReportSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsReportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}