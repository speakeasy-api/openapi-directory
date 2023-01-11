package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebAclRequest {
    public GetWebAclHeaders headers;
    public GetWebAclRequest withHeaders(GetWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWebAclRequest request;
    public GetWebAclRequest withRequest(openapisdk.models.shared.GetWebAclRequest request) {
        this.request = request;
        return this;
    }
}