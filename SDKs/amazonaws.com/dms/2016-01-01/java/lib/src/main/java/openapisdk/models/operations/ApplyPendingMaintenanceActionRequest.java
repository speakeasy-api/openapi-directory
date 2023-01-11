package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplyPendingMaintenanceActionRequest {
    public ApplyPendingMaintenanceActionHeaders headers;
    public ApplyPendingMaintenanceActionRequest withHeaders(ApplyPendingMaintenanceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplyPendingMaintenanceActionMessage request;
    public ApplyPendingMaintenanceActionRequest withRequest(openapisdk.models.shared.ApplyPendingMaintenanceActionMessage request) {
        this.request = request;
        return this;
    }
}