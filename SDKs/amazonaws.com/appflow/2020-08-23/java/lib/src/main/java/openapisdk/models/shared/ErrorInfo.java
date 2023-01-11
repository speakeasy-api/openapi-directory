package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorInfo
 *  Provides details in the event of a failed flow, including the failure count and the related error messages. 
**/
public class ErrorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionMessage")
    public String executionMessage;
    public ErrorInfo withExecutionMessage(String executionMessage) {
        this.executionMessage = executionMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("putFailuresCount")
    public Long putFailuresCount;
    public ErrorInfo withPutFailuresCount(Long putFailuresCount) {
        this.putFailuresCount = putFailuresCount;
        return this;
    }
}