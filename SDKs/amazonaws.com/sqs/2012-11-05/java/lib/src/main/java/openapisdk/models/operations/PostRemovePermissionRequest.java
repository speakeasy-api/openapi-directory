package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemovePermissionRequest {
    public PostRemovePermissionQueryParams queryParams;
    public PostRemovePermissionRequest withQueryParams(PostRemovePermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemovePermissionHeaders headers;
    public PostRemovePermissionRequest withHeaders(PostRemovePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemovePermissionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}