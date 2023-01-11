package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourcePendingMaintenanceActions
 * Identifies an DMS resource and any pending actions for it.
**/
public class ResourcePendingMaintenanceActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingMaintenanceActionDetails")
    public PendingMaintenanceAction[] pendingMaintenanceActionDetails;
    public ResourcePendingMaintenanceActions withPendingMaintenanceActionDetails(PendingMaintenanceAction[] pendingMaintenanceActionDetails) {
        this.pendingMaintenanceActionDetails = pendingMaintenanceActionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifier")
    public String resourceIdentifier;
    public ResourcePendingMaintenanceActions withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}