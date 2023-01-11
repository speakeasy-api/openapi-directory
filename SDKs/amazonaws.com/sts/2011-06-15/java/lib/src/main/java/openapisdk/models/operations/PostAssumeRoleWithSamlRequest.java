package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleWithSamlRequest {
    public PostAssumeRoleWithSamlQueryParams queryParams;
    public PostAssumeRoleWithSamlRequest withQueryParams(PostAssumeRoleWithSamlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssumeRoleWithSamlHeaders headers;
    public PostAssumeRoleWithSamlRequest withHeaders(PostAssumeRoleWithSamlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssumeRoleWithSamlRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}