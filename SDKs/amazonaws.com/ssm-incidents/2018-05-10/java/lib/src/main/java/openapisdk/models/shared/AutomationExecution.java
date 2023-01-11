package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutomationExecution
 * The Systems Manager automation document process to start as the runbook at the beginning of the incident.
**/
public class AutomationExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmExecutionArn")
    public String ssmExecutionArn;
    public AutomationExecution withSsmExecutionArn(String ssmExecutionArn) {
        this.ssmExecutionArn = ssmExecutionArn;
        return this;
    }
}