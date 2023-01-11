package openapisdk.models.shared;



/**
 * ResourcePendingMaintenanceActions
 * Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
**/
public class ResourcePendingMaintenanceActions {
    public PendingMaintenanceActionDetails[] pendingMaintenanceActionDetails;
    public ResourcePendingMaintenanceActions withPendingMaintenanceActionDetails(PendingMaintenanceActionDetails[] pendingMaintenanceActionDetails) {
        this.pendingMaintenanceActionDetails = pendingMaintenanceActionDetails;
        return this;
    }
    public String resourceIdentifier;
    public ResourcePendingMaintenanceActions withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}