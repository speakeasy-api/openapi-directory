package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetReportGroupsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportGroups")
    public ReportGroup[] reportGroups;
    public BatchGetReportGroupsOutput withReportGroups(ReportGroup[] reportGroups) {
        this.reportGroups = reportGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportGroupsNotFound")
    public String[] reportGroupsNotFound;
    public BatchGetReportGroupsOutput withReportGroupsNotFound(String[] reportGroupsNotFound) {
        this.reportGroupsNotFound = reportGroupsNotFound;
        return this;
    }
}