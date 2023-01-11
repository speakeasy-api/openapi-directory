package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPersonTrackingRequest {
    public StartPersonTrackingHeaders headers;
    public StartPersonTrackingRequest withHeaders(StartPersonTrackingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartPersonTrackingRequest request;
    public StartPersonTrackingRequest withRequest(openapisdk.models.shared.StartPersonTrackingRequest request) {
        this.request = request;
        return this;
    }
}