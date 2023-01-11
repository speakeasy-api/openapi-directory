package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAllowedNodeTypeModificationsRequest {
    public PostListAllowedNodeTypeModificationsQueryParams queryParams;
    public PostListAllowedNodeTypeModificationsRequest withQueryParams(PostListAllowedNodeTypeModificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAllowedNodeTypeModificationsHeaders headers;
    public PostListAllowedNodeTypeModificationsRequest withHeaders(PostListAllowedNodeTypeModificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAllowedNodeTypeModificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}