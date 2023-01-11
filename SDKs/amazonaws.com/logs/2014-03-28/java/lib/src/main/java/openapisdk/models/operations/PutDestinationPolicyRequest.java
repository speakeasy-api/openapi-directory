package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDestinationPolicyRequest {
    public PutDestinationPolicyHeaders headers;
    public PutDestinationPolicyRequest withHeaders(PutDestinationPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDestinationPolicyRequest request;
    public PutDestinationPolicyRequest withRequest(openapisdk.models.shared.PutDestinationPolicyRequest request) {
        this.request = request;
        return this;
    }
}