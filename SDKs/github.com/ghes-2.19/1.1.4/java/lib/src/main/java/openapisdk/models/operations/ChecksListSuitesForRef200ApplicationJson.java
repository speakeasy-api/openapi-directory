package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksListSuitesForRef200ApplicationJson {
    @JsonProperty("check_suites")
    public openapisdk.models.shared.CheckSuite[] checkSuites;
    public ChecksListSuitesForRef200ApplicationJson withCheckSuites(openapisdk.models.shared.CheckSuite[] checkSuites) {
        this.checkSuites = checkSuites;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ChecksListSuitesForRef200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}