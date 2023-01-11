package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetReportGroupsInput {
    @JsonProperty("reportGroupArns")
    public String[] reportGroupArns;
    public BatchGetReportGroupsInput withReportGroupArns(String[] reportGroupArns) {
        this.reportGroupArns = reportGroupArns;
        return this;
    }
}