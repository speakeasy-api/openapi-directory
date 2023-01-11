package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeExportTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportIds")
    public String[] exportIds;
    public DescribeExportTasksRequest withExportIds(String[] exportIds) {
        this.exportIds = exportIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ExportFilter[] filters;
    public DescribeExportTasksRequest withFilters(ExportFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeExportTasksRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeExportTasksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}