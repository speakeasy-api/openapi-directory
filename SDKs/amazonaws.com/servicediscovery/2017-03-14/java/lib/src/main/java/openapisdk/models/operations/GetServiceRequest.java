package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceRequest {
    public GetServiceHeaders headers;
    public GetServiceRequest withHeaders(GetServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceRequest request;
    public GetServiceRequest withRequest(openapisdk.models.shared.GetServiceRequest request) {
        this.request = request;
        return this;
    }
}