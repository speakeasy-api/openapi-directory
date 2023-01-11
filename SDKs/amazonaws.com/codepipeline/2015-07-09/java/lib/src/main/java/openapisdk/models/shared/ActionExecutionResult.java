package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionExecutionResult
 * Execution result information, such as the external execution ID.
**/
public class ActionExecutionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionId")
    public String externalExecutionId;
    public ActionExecutionResult withExternalExecutionId(String externalExecutionId) {
        this.externalExecutionId = externalExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionSummary")
    public String externalExecutionSummary;
    public ActionExecutionResult withExternalExecutionSummary(String externalExecutionSummary) {
        this.externalExecutionSummary = externalExecutionSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionUrl")
    public String externalExecutionUrl;
    public ActionExecutionResult withExternalExecutionUrl(String externalExecutionUrl) {
        this.externalExecutionUrl = externalExecutionUrl;
        return this;
    }
}