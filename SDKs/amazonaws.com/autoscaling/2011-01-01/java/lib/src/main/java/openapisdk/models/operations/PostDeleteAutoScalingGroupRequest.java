package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAutoScalingGroupRequest {
    public PostDeleteAutoScalingGroupQueryParams queryParams;
    public PostDeleteAutoScalingGroupRequest withQueryParams(PostDeleteAutoScalingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAutoScalingGroupHeaders headers;
    public PostDeleteAutoScalingGroupRequest withHeaders(PostDeleteAutoScalingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAutoScalingGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}