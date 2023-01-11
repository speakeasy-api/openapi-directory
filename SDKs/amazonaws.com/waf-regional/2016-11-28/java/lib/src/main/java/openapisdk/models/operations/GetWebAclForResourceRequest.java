package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebAclForResourceRequest {
    public GetWebAclForResourceHeaders headers;
    public GetWebAclForResourceRequest withHeaders(GetWebAclForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWebAclForResourceRequest request;
    public GetWebAclForResourceRequest withRequest(openapisdk.models.shared.GetWebAclForResourceRequest request) {
        this.request = request;
        return this;
    }
}