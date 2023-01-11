package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToInstanceProfileRequest {
    public PostAddRoleToInstanceProfileQueryParams queryParams;
    public PostAddRoleToInstanceProfileRequest withQueryParams(PostAddRoleToInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddRoleToInstanceProfileHeaders headers;
    public PostAddRoleToInstanceProfileRequest withHeaders(PostAddRoleToInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddRoleToInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}