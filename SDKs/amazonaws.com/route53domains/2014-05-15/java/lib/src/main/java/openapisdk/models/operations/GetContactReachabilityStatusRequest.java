package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactReachabilityStatusRequest {
    public GetContactReachabilityStatusHeaders headers;
    public GetContactReachabilityStatusRequest withHeaders(GetContactReachabilityStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContactReachabilityStatusRequest request;
    public GetContactReachabilityStatusRequest withRequest(openapisdk.models.shared.GetContactReachabilityStatusRequest request) {
        this.request = request;
        return this;
    }
}