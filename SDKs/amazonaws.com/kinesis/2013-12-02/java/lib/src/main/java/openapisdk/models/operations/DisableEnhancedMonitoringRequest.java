package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableEnhancedMonitoringRequest {
    public DisableEnhancedMonitoringHeaders headers;
    public DisableEnhancedMonitoringRequest withHeaders(DisableEnhancedMonitoringHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableEnhancedMonitoringInput request;
    public DisableEnhancedMonitoringRequest withRequest(openapisdk.models.shared.DisableEnhancedMonitoringInput request) {
        this.request = request;
        return this;
    }
}