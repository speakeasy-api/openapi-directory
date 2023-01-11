package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAclRequest {
    public DeleteAclHeaders headers;
    public DeleteAclRequest withHeaders(DeleteAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAclRequest request;
    public DeleteAclRequest withRequest(openapisdk.models.shared.DeleteAclRequest request) {
        this.request = request;
        return this;
    }
}