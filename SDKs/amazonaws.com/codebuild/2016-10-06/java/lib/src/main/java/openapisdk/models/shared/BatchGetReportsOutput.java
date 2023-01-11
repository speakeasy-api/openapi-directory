package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetReportsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reports")
    public Report[] reports;
    public BatchGetReportsOutput withReports(Report[] reports) {
        this.reports = reports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportsNotFound")
    public String[] reportsNotFound;
    public BatchGetReportsOutput withReportsNotFound(String[] reportsNotFound) {
        this.reportsNotFound = reportsNotFound;
        return this;
    }
}