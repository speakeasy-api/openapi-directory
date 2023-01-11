package openapisdk.models.shared;



/**
 * PendingMaintenanceActionsMessage
 * Data returned from the <b>DescribePendingMaintenanceActions</b> action.
**/
public class PendingMaintenanceActionsMessage {
    public String marker;
    public PendingMaintenanceActionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public PendingMaintenanceActions[] pendingMaintenanceActions;
    public PendingMaintenanceActionsMessage withPendingMaintenanceActions(PendingMaintenanceActions[] pendingMaintenanceActions) {
        this.pendingMaintenanceActions = pendingMaintenanceActions;
        return this;
    }
}