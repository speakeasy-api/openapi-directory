package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkAclRequest {
    public PostCreateNetworkAclQueryParams queryParams;
    public PostCreateNetworkAclRequest withQueryParams(PostCreateNetworkAclQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNetworkAclHeaders headers;
    public PostCreateNetworkAclRequest withHeaders(PostCreateNetworkAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNetworkAclRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}