package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCorsPolicyRequest {
    public GetCorsPolicyHeaders headers;
    public GetCorsPolicyRequest withHeaders(GetCorsPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCorsPolicyInput request;
    public GetCorsPolicyRequest withRequest(openapisdk.models.shared.GetCorsPolicyInput request) {
        this.request = request;
        return this;
    }
}