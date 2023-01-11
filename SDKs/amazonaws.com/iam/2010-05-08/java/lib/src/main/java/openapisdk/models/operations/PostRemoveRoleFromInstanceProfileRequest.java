package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromInstanceProfileRequest {
    public PostRemoveRoleFromInstanceProfileQueryParams queryParams;
    public PostRemoveRoleFromInstanceProfileRequest withQueryParams(PostRemoveRoleFromInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveRoleFromInstanceProfileHeaders headers;
    public PostRemoveRoleFromInstanceProfileRequest withHeaders(PostRemoveRoleFromInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveRoleFromInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}