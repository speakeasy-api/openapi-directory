package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleWithWebIdentityRequest {
    public PostAssumeRoleWithWebIdentityQueryParams queryParams;
    public PostAssumeRoleWithWebIdentityRequest withQueryParams(PostAssumeRoleWithWebIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssumeRoleWithWebIdentityHeaders headers;
    public PostAssumeRoleWithWebIdentityRequest withHeaders(PostAssumeRoleWithWebIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssumeRoleWithWebIdentityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}