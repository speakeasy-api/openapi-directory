package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateRoleDescriptionRequest {
    public PostUpdateRoleDescriptionQueryParams queryParams;
    public PostUpdateRoleDescriptionRequest withQueryParams(PostUpdateRoleDescriptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateRoleDescriptionHeaders headers;
    public PostUpdateRoleDescriptionRequest withHeaders(PostUpdateRoleDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateRoleDescriptionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}