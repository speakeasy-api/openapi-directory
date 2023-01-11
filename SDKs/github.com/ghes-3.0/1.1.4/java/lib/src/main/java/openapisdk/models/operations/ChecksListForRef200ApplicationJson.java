package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksListForRef200ApplicationJson {
    @JsonProperty("check_runs")
    public openapisdk.models.shared.CheckRun[] checkRuns;
    public ChecksListForRef200ApplicationJson withCheckRuns(openapisdk.models.shared.CheckRun[] checkRuns) {
        this.checkRuns = checkRuns;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ChecksListForRef200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}