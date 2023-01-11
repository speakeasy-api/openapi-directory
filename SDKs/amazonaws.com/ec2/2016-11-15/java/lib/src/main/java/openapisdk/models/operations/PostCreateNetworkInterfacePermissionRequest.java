package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInterfacePermissionRequest {
    public PostCreateNetworkInterfacePermissionQueryParams queryParams;
    public PostCreateNetworkInterfacePermissionRequest withQueryParams(PostCreateNetworkInterfacePermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNetworkInterfacePermissionHeaders headers;
    public PostCreateNetworkInterfacePermissionRequest withHeaders(PostCreateNetworkInterfacePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNetworkInterfacePermissionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}