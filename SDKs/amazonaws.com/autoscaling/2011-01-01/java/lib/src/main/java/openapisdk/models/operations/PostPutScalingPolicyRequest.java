package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutScalingPolicyRequest {
    public PostPutScalingPolicyQueryParams queryParams;
    public PostPutScalingPolicyRequest withQueryParams(PostPutScalingPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutScalingPolicyHeaders headers;
    public PostPutScalingPolicyRequest withHeaders(PostPutScalingPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutScalingPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}