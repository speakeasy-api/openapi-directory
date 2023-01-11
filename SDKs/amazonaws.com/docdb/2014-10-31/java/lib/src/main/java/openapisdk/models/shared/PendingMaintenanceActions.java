package openapisdk.models.shared;



/**
 * PendingMaintenanceActions
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
**/
public class PendingMaintenanceActions {
    public PendingMaintenanceActionDetails[] pendingMaintenanceActionDetails;
    public PendingMaintenanceActions withPendingMaintenanceActionDetails(PendingMaintenanceActionDetails[] pendingMaintenanceActionDetails) {
        this.pendingMaintenanceActionDetails = pendingMaintenanceActionDetails;
        return this;
    }
    public String resourceIdentifier;
    public PendingMaintenanceActions withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}