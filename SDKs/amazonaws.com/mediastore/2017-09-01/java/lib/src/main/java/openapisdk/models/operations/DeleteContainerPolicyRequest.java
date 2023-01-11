package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainerPolicyRequest {
    public DeleteContainerPolicyHeaders headers;
    public DeleteContainerPolicyRequest withHeaders(DeleteContainerPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContainerPolicyInput request;
    public DeleteContainerPolicyRequest withRequest(openapisdk.models.shared.DeleteContainerPolicyInput request) {
        this.request = request;
        return this;
    }
}