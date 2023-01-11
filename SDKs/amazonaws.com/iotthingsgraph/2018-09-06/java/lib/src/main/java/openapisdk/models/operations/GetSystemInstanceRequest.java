package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSystemInstanceRequest {
    public GetSystemInstanceHeaders headers;
    public GetSystemInstanceRequest withHeaders(GetSystemInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSystemInstanceRequest request;
    public GetSystemInstanceRequest withRequest(openapisdk.models.shared.GetSystemInstanceRequest request) {
        this.request = request;
        return this;
    }
}