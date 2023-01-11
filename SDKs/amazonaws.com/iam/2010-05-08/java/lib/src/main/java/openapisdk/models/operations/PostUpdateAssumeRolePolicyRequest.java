package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAssumeRolePolicyRequest {
    public PostUpdateAssumeRolePolicyQueryParams queryParams;
    public PostUpdateAssumeRolePolicyRequest withQueryParams(PostUpdateAssumeRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAssumeRolePolicyHeaders headers;
    public PostUpdateAssumeRolePolicyRequest withHeaders(PostUpdateAssumeRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAssumeRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}