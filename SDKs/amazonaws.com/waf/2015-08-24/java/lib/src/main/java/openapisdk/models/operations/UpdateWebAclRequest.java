package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebAclRequest {
    public UpdateWebAclHeaders headers;
    public UpdateWebAclRequest withHeaders(UpdateWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWebAclRequest request;
    public UpdateWebAclRequest withRequest(openapisdk.models.shared.UpdateWebAclRequest request) {
        this.request = request;
        return this;
    }
}