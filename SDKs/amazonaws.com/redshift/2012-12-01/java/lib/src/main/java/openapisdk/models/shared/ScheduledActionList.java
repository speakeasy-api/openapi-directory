package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ScheduledActionList
 * Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
**/
public class ScheduledActionList {
    public OffsetDateTime endTime;
    public ScheduledActionList withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    public String iamRole;
    public ScheduledActionList withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    public java.util.Map<String, Object>[] nextInvocations;
    public ScheduledActionList withNextInvocations(java.util.Map<String, Object>[] nextInvocations) {
        this.nextInvocations = nextInvocations;
        return this;
    }
    public String schedule;
    public ScheduledActionList withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    public String scheduledActionDescription;
    public ScheduledActionList withScheduledActionDescription(String scheduledActionDescription) {
        this.scheduledActionDescription = scheduledActionDescription;
        return this;
    }
    public String scheduledActionName;
    public ScheduledActionList withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
    public OffsetDateTime startTime;
    public ScheduledActionList withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public ScheduledActionStateEnum state;
    public ScheduledActionList withState(ScheduledActionStateEnum state) {
        this.state = state;
        return this;
    }
    public ScheduledActionType targetAction;
    public ScheduledActionList withTargetAction(ScheduledActionType targetAction) {
        this.targetAction = targetAction;
        return this;
    }
}