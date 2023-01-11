package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCodeCoveragesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLineCoveragePercentage")
    public Double maxLineCoveragePercentage;
    public DescribeCodeCoveragesInput withMaxLineCoveragePercentage(Double maxLineCoveragePercentage) {
        this.maxLineCoveragePercentage = maxLineCoveragePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeCodeCoveragesInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLineCoveragePercentage")
    public Double minLineCoveragePercentage;
    public DescribeCodeCoveragesInput withMinLineCoveragePercentage(Double minLineCoveragePercentage) {
        this.minLineCoveragePercentage = minLineCoveragePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCodeCoveragesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("reportArn")
    public String reportArn;
    public DescribeCodeCoveragesInput withReportArn(String reportArn) {
        this.reportArn = reportArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ReportCodeCoverageSortByTypeEnum sortBy;
    public DescribeCodeCoveragesInput withSortBy(ReportCodeCoverageSortByTypeEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderTypeEnum sortOrder;
    public DescribeCodeCoveragesInput withSortOrder(SortOrderTypeEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}