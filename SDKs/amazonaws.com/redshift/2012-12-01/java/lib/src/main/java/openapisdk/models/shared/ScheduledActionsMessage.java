package openapisdk.models.shared;



public class ScheduledActionsMessage {
    public String marker;
    public ScheduledActionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ScheduledActionList[] scheduledActions;
    public ScheduledActionsMessage withScheduledActions(ScheduledActionList[] scheduledActions) {
        this.scheduledActions = scheduledActions;
        return this;
    }
}