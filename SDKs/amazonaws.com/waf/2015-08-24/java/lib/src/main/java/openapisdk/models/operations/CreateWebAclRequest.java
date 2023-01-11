package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebAclRequest {
    public CreateWebAclHeaders headers;
    public CreateWebAclRequest withHeaders(CreateWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebAclRequest request;
    public CreateWebAclRequest withRequest(openapisdk.models.shared.CreateWebAclRequest request) {
        this.request = request;
        return this;
    }
}