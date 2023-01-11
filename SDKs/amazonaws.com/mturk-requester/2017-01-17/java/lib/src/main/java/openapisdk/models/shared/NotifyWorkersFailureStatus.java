package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotifyWorkersFailureStatus
 *  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
**/
public class NotifyWorkersFailureStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyWorkersFailureCode")
    public NotifyWorkersFailureCodeEnum notifyWorkersFailureCode;
    public NotifyWorkersFailureStatus withNotifyWorkersFailureCode(NotifyWorkersFailureCodeEnum notifyWorkersFailureCode) {
        this.notifyWorkersFailureCode = notifyWorkersFailureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyWorkersFailureMessage")
    public String notifyWorkersFailureMessage;
    public NotifyWorkersFailureStatus withNotifyWorkersFailureMessage(String notifyWorkersFailureMessage) {
        this.notifyWorkersFailureMessage = notifyWorkersFailureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerId")
    public String workerId;
    public NotifyWorkersFailureStatus withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}