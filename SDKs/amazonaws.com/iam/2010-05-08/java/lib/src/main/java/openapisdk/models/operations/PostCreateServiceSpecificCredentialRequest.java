package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateServiceSpecificCredentialRequest {
    public PostCreateServiceSpecificCredentialQueryParams queryParams;
    public PostCreateServiceSpecificCredentialRequest withQueryParams(PostCreateServiceSpecificCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateServiceSpecificCredentialHeaders headers;
    public PostCreateServiceSpecificCredentialRequest withHeaders(PostCreateServiceSpecificCredentialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateServiceSpecificCredentialRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}