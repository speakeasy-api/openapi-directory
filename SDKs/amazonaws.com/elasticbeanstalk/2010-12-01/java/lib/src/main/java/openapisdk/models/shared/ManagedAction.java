package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ManagedAction
 * The record of an upcoming or in-progress managed action.
**/
public class ManagedAction {
    public String actionDescription;
    public ManagedAction withActionDescription(String actionDescription) {
        this.actionDescription = actionDescription;
        return this;
    }
    public String actionId;
    public ManagedAction withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    public ActionTypeEnum actionType;
    public ManagedAction withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    public ActionStatusEnum status;
    public ManagedAction withStatus(ActionStatusEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime windowStartTime;
    public ManagedAction withWindowStartTime(OffsetDateTime windowStartTime) {
        this.windowStartTime = windowStartTime;
        return this;
    }
}