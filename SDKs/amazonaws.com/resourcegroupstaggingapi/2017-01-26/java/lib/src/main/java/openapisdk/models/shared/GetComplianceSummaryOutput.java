package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetComplianceSummaryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public GetComplianceSummaryOutput withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SummaryList")
    public Summary[] summaryList;
    public GetComplianceSummaryOutput withSummaryList(Summary[] summaryList) {
        this.summaryList = summaryList;
        return this;
    }
}