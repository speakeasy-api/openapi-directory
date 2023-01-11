package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactMethodsRequest {
    public GetContactMethodsHeaders headers;
    public GetContactMethodsRequest withHeaders(GetContactMethodsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContactMethodsRequest request;
    public GetContactMethodsRequest withRequest(openapisdk.models.shared.GetContactMethodsRequest request) {
        this.request = request;
        return this;
    }
}