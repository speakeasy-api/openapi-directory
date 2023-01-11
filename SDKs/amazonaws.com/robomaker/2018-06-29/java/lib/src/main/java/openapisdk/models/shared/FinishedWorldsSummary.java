package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FinishedWorldsSummary
 * Information about worlds that finished.
**/
public class FinishedWorldsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureSummary")
    public FailureSummary failureSummary;
    public FinishedWorldsSummary withFailureSummary(FailureSummary failureSummary) {
        this.failureSummary = failureSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishedCount")
    public Long finishedCount;
    public FinishedWorldsSummary withFinishedCount(Long finishedCount) {
        this.finishedCount = finishedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededWorlds")
    public String[] succeededWorlds;
    public FinishedWorldsSummary withSucceededWorlds(String[] succeededWorlds) {
        this.succeededWorlds = succeededWorlds;
        return this;
    }
}