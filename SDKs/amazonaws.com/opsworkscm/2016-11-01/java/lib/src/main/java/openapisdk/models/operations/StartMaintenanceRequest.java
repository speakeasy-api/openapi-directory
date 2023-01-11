package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMaintenanceRequest {
    public StartMaintenanceHeaders headers;
    public StartMaintenanceRequest withHeaders(StartMaintenanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMaintenanceRequest request;
    public StartMaintenanceRequest withRequest(openapisdk.models.shared.StartMaintenanceRequest request) {
        this.request = request;
        return this;
    }
}