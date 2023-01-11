package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutUserPermissionsBoundaryRequest {
    public PostPutUserPermissionsBoundaryQueryParams queryParams;
    public PostPutUserPermissionsBoundaryRequest withQueryParams(PostPutUserPermissionsBoundaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutUserPermissionsBoundaryHeaders headers;
    public PostPutUserPermissionsBoundaryRequest withHeaders(PostPutUserPermissionsBoundaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutUserPermissionsBoundaryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}