package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendContactReachabilityEmailRequest {
    public ResendContactReachabilityEmailHeaders headers;
    public ResendContactReachabilityEmailRequest withHeaders(ResendContactReachabilityEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResendContactReachabilityEmailRequest request;
    public ResendContactReachabilityEmailRequest withRequest(openapisdk.models.shared.ResendContactReachabilityEmailRequest request) {
        this.request = request;
        return this;
    }
}