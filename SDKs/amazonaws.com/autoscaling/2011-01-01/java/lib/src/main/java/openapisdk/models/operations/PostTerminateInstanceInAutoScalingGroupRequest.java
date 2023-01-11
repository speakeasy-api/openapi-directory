package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateInstanceInAutoScalingGroupRequest {
    public PostTerminateInstanceInAutoScalingGroupQueryParams queryParams;
    public PostTerminateInstanceInAutoScalingGroupRequest withQueryParams(PostTerminateInstanceInAutoScalingGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTerminateInstanceInAutoScalingGroupHeaders headers;
    public PostTerminateInstanceInAutoScalingGroupRequest withHeaders(PostTerminateInstanceInAutoScalingGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTerminateInstanceInAutoScalingGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}