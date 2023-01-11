package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteStatementResult
 * Contains the details of the executed statement.
**/
public class ExecuteStatementResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedIOs")
    public IoUsage consumedIOs;
    public ExecuteStatementResult withConsumedIOs(IoUsage consumedIOs) {
        this.consumedIOs = consumedIOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstPage")
    public Page firstPage;
    public ExecuteStatementResult withFirstPage(Page firstPage) {
        this.firstPage = firstPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public ExecuteStatementResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
}