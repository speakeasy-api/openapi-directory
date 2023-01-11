package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribePendingMaintenanceActionsResponse
 * <p/>
**/
public class DescribePendingMaintenanceActionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribePendingMaintenanceActionsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingMaintenanceActions")
    public ResourcePendingMaintenanceActions[] pendingMaintenanceActions;
    public DescribePendingMaintenanceActionsResponse withPendingMaintenanceActions(ResourcePendingMaintenanceActions[] pendingMaintenanceActions) {
        this.pendingMaintenanceActions = pendingMaintenanceActions;
        return this;
    }
}