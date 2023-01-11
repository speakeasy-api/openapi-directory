package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCorsPolicyRequest {
    public PutCorsPolicyHeaders headers;
    public PutCorsPolicyRequest withHeaders(PutCorsPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutCorsPolicyInput request;
    public PutCorsPolicyRequest withRequest(openapisdk.models.shared.PutCorsPolicyInput request) {
        this.request = request;
        return this;
    }
}