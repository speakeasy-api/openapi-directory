package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAutoScalingGroupRequest {
    public PostCreateAutoScalingGroupQueryParams queryParams;
    public PostCreateAutoScalingGroupRequest withQueryParams(PostCreateAutoScalingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateAutoScalingGroupHeaders headers;
    public PostCreateAutoScalingGroupRequest withHeaders(PostCreateAutoScalingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateAutoScalingGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}