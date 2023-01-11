package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReportsForReportGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public ReportFilter filter;
    public ListReportsForReportGroupInput withFilter(ReportFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListReportsForReportGroupInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListReportsForReportGroupInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("reportGroupArn")
    public String reportGroupArn;
    public ListReportsForReportGroupInput withReportGroupArn(String reportGroupArn) {
        this.reportGroupArn = reportGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderTypeEnum sortOrder;
    public ListReportsForReportGroupInput withSortOrder(SortOrderTypeEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}