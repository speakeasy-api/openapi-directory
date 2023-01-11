package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableEnhancedMonitoringRequest {
    public EnableEnhancedMonitoringHeaders headers;
    public EnableEnhancedMonitoringRequest withHeaders(EnableEnhancedMonitoringHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableEnhancedMonitoringInput request;
    public EnableEnhancedMonitoringRequest withRequest(openapisdk.models.shared.EnableEnhancedMonitoringInput request) {
        this.request = request;
        return this;
    }
}