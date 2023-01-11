package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServiceSpecificCredentialRequest {
    public PostDeleteServiceSpecificCredentialQueryParams queryParams;
    public PostDeleteServiceSpecificCredentialRequest withQueryParams(PostDeleteServiceSpecificCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteServiceSpecificCredentialHeaders headers;
    public PostDeleteServiceSpecificCredentialRequest withHeaders(PostDeleteServiceSpecificCredentialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteServiceSpecificCredentialRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}