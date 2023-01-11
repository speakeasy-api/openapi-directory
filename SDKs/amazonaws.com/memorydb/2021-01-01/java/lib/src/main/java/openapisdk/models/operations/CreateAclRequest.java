package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAclRequest {
    public CreateAclHeaders headers;
    public CreateAclRequest withHeaders(CreateAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAclRequest request;
    public CreateAclRequest withRequest(openapisdk.models.shared.CreateAclRequest request) {
        this.request = request;
        return this;
    }
}