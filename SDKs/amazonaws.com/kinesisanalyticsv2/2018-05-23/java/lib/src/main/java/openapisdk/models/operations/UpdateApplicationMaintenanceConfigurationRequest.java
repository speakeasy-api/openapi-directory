package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationMaintenanceConfigurationRequest {
    public UpdateApplicationMaintenanceConfigurationHeaders headers;
    public UpdateApplicationMaintenanceConfigurationRequest withHeaders(UpdateApplicationMaintenanceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApplicationMaintenanceConfigurationRequest request;
    public UpdateApplicationMaintenanceConfigurationRequest withRequest(openapisdk.models.shared.UpdateApplicationMaintenanceConfigurationRequest request) {
        this.request = request;
        return this;
    }
}