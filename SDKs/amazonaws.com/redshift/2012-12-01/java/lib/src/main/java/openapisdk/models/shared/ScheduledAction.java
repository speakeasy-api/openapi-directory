package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ScheduledAction
 * Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
**/
public class ScheduledAction {
    public OffsetDateTime endTime;
    public ScheduledAction withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    public String iamRole;
    public ScheduledAction withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    public java.util.Map<String, Object>[] nextInvocations;
    public ScheduledAction withNextInvocations(java.util.Map<String, Object>[] nextInvocations) {
        this.nextInvocations = nextInvocations;
        return this;
    }
    public String schedule;
    public ScheduledAction withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    public String scheduledActionDescription;
    public ScheduledAction withScheduledActionDescription(String scheduledActionDescription) {
        this.scheduledActionDescription = scheduledActionDescription;
        return this;
    }
    public String scheduledActionName;
    public ScheduledAction withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
    public OffsetDateTime startTime;
    public ScheduledAction withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public ScheduledActionStateEnum state;
    public ScheduledAction withState(ScheduledActionStateEnum state) {
        this.state = state;
        return this;
    }
    public ScheduledActionType targetAction;
    public ScheduledAction withTargetAction(ScheduledActionType targetAction) {
        this.targetAction = targetAction;
        return this;
    }
}