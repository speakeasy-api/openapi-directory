package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IoTJobAbortCriteria
 * <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
**/
public class IoTJobAbortCriteria {
    @JsonProperty("action")
    public IoTJobAbortActionEnum action;
    public IoTJobAbortCriteria withAction(IoTJobAbortActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("failureType")
    public IoTJobExecutionFailureTypeEnum failureType;
    public IoTJobAbortCriteria withFailureType(IoTJobExecutionFailureTypeEnum failureType) {
        this.failureType = failureType;
        return this;
    }
    @JsonProperty("minNumberOfExecutedThings")
    public Long minNumberOfExecutedThings;
    public IoTJobAbortCriteria withMinNumberOfExecutedThings(Long minNumberOfExecutedThings) {
        this.minNumberOfExecutedThings = minNumberOfExecutedThings;
        return this;
    }
    @JsonProperty("thresholdPercentage")
    public Double thresholdPercentage;
    public IoTJobAbortCriteria withThresholdPercentage(Double thresholdPercentage) {
        this.thresholdPercentage = thresholdPercentage;
        return this;
    }
}