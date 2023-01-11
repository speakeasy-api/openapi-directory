package openapisdk.models.shared;



public class UpdateActionsMessage {
    public String marker;
    public UpdateActionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public UpdateActionList[] updateActions;
    public UpdateActionsMessage withUpdateActions(UpdateActionList[] updateActions) {
        this.updateActions = updateActions;
        return this;
    }
}