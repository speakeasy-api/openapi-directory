package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAutoScalingGroupRequest {
    public PostUpdateAutoScalingGroupQueryParams queryParams;
    public PostUpdateAutoScalingGroupRequest withQueryParams(PostUpdateAutoScalingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAutoScalingGroupHeaders headers;
    public PostUpdateAutoScalingGroupRequest withHeaders(PostUpdateAutoScalingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAutoScalingGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}