package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ManagedActionHistoryItem
 * The record of a completed or failed managed action.
**/
public class ManagedActionHistoryItem {
    public String actionDescription;
    public ManagedActionHistoryItem withActionDescription(String actionDescription) {
        this.actionDescription = actionDescription;
        return this;
    }
    public String actionId;
    public ManagedActionHistoryItem withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    public ActionTypeEnum actionType;
    public ManagedActionHistoryItem withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    public OffsetDateTime executedTime;
    public ManagedActionHistoryItem withExecutedTime(OffsetDateTime executedTime) {
        this.executedTime = executedTime;
        return this;
    }
    public String failureDescription;
    public ManagedActionHistoryItem withFailureDescription(String failureDescription) {
        this.failureDescription = failureDescription;
        return this;
    }
    public FailureTypeEnum failureType;
    public ManagedActionHistoryItem withFailureType(FailureTypeEnum failureType) {
        this.failureType = failureType;
        return this;
    }
    public OffsetDateTime finishedTime;
    public ManagedActionHistoryItem withFinishedTime(OffsetDateTime finishedTime) {
        this.finishedTime = finishedTime;
        return this;
    }
    public ActionHistoryStatusEnum status;
    public ManagedActionHistoryItem withStatus(ActionHistoryStatusEnum status) {
        this.status = status;
        return this;
    }
}