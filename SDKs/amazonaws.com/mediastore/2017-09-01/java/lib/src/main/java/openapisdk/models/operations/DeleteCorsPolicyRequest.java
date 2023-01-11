package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCorsPolicyRequest {
    public DeleteCorsPolicyHeaders headers;
    public DeleteCorsPolicyRequest withHeaders(DeleteCorsPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCorsPolicyInput request;
    public DeleteCorsPolicyRequest withRequest(openapisdk.models.shared.DeleteCorsPolicyInput request) {
        this.request = request;
        return this;
    }
}