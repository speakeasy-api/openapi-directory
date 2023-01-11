package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedDeleteRemediationExceptionsBatch
 * List of each of the failed delete remediation exceptions with specific reasons.
**/
public class FailedDeleteRemediationExceptionsBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedItems")
    public RemediationExceptionResourceKey[] failedItems;
    public FailedDeleteRemediationExceptionsBatch withFailedItems(RemediationExceptionResourceKey[] failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureMessage")
    public String failureMessage;
    public FailedDeleteRemediationExceptionsBatch withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}