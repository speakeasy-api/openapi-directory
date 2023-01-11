package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInterfacePermissionRequest {
    public PostDeleteNetworkInterfacePermissionQueryParams queryParams;
    public PostDeleteNetworkInterfacePermissionRequest withQueryParams(PostDeleteNetworkInterfacePermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNetworkInterfacePermissionHeaders headers;
    public PostDeleteNetworkInterfacePermissionRequest withHeaders(PostDeleteNetworkInterfacePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNetworkInterfacePermissionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}