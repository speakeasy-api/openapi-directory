package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleExecutionReportings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executions")
    public RuleExecutionReporting[] executions;
    public RuleExecutionReportings withExecutions(RuleExecutionReporting[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public RuleExecutionReportings withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}