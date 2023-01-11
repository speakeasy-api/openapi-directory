package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetReportsInput {
    @JsonProperty("reportArns")
    public String[] reportArns;
    public BatchGetReportsInput withReportArns(String[] reportArns) {
        this.reportArns = reportArns;
        return this;
    }
}