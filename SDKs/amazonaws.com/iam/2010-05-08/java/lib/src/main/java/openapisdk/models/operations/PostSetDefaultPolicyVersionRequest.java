package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetDefaultPolicyVersionRequest {
    public PostSetDefaultPolicyVersionQueryParams queryParams;
    public PostSetDefaultPolicyVersionRequest withQueryParams(PostSetDefaultPolicyVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetDefaultPolicyVersionHeaders headers;
    public PostSetDefaultPolicyVersionRequest withHeaders(PostSetDefaultPolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetDefaultPolicyVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}