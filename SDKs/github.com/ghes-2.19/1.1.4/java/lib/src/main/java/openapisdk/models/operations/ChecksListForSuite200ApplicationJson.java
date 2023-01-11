package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksListForSuite200ApplicationJson {
    @JsonProperty("check_runs")
    public openapisdk.models.shared.CheckRun[] checkRuns;
    public ChecksListForSuite200ApplicationJson withCheckRuns(openapisdk.models.shared.CheckRun[] checkRuns) {
        this.checkRuns = checkRuns;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ChecksListForSuite200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}