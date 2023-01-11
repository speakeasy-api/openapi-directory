package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebAclRequest {
    public DeleteWebAclHeaders headers;
    public DeleteWebAclRequest withHeaders(DeleteWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWebAclRequest request;
    public DeleteWebAclRequest withRequest(openapisdk.models.shared.DeleteWebAclRequest request) {
        this.request = request;
        return this;
    }
}