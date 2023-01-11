package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAclRequest {
    public UpdateAclHeaders headers;
    public UpdateAclRequest withHeaders(UpdateAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAclRequest request;
    public UpdateAclRequest withRequest(openapisdk.models.shared.UpdateAclRequest request) {
        this.request = request;
        return this;
    }
}