package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeExportTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportTasks")
    public ExportTask[] exportTasks;
    public DescribeExportTasksResponse withExportTasks(ExportTask[] exportTasks) {
        this.exportTasks = exportTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeExportTasksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}