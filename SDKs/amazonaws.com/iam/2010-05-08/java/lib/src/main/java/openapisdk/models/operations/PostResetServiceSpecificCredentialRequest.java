package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetServiceSpecificCredentialRequest {
    public PostResetServiceSpecificCredentialQueryParams queryParams;
    public PostResetServiceSpecificCredentialRequest withQueryParams(PostResetServiceSpecificCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetServiceSpecificCredentialHeaders headers;
    public PostResetServiceSpecificCredentialRequest withHeaders(PostResetServiceSpecificCredentialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetServiceSpecificCredentialRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}