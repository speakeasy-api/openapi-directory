package openapisdk.models.shared;



public class ScheduledActionsType {
    public String nextToken;
    public ScheduledActionsType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public ScheduledUpdateGroupAction[] scheduledUpdateGroupActions;
    public ScheduledActionsType withScheduledUpdateGroupActions(ScheduledUpdateGroupAction[] scheduledUpdateGroupActions) {
        this.scheduledUpdateGroupActions = scheduledUpdateGroupActions;
        return this;
    }
}