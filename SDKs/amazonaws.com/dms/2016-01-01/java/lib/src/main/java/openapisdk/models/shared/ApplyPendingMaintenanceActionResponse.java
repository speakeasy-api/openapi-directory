package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplyPendingMaintenanceActionResponse
 * <p/>
**/
public class ApplyPendingMaintenanceActionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourcePendingMaintenanceActions")
    public ResourcePendingMaintenanceActions resourcePendingMaintenanceActions;
    public ApplyPendingMaintenanceActionResponse withResourcePendingMaintenanceActions(ResourcePendingMaintenanceActions resourcePendingMaintenanceActions) {
        this.resourcePendingMaintenanceActions = resourcePendingMaintenanceActions;
        return this;
    }
}