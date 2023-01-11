package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceInstanceRequest {
    public GetServiceInstanceHeaders headers;
    public GetServiceInstanceRequest withHeaders(GetServiceInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceInstanceInput request;
    public GetServiceInstanceRequest withRequest(openapisdk.models.shared.GetServiceInstanceInput request) {
        this.request = request;
        return this;
    }
}