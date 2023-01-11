package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SkipWaitTimeForInstanceTerminationRequest {
    public SkipWaitTimeForInstanceTerminationHeaders headers;
    public SkipWaitTimeForInstanceTerminationRequest withHeaders(SkipWaitTimeForInstanceTerminationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SkipWaitTimeForInstanceTerminationInput request;
    public SkipWaitTimeForInstanceTerminationRequest withRequest(openapisdk.models.shared.SkipWaitTimeForInstanceTerminationInput request) {
        this.request = request;
        return this;
    }
}