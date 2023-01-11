package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServiceSpecificCredentialRequest {
    public PostUpdateServiceSpecificCredentialQueryParams queryParams;
    public PostUpdateServiceSpecificCredentialRequest withQueryParams(PostUpdateServiceSpecificCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateServiceSpecificCredentialHeaders headers;
    public PostUpdateServiceSpecificCredentialRequest withHeaders(PostUpdateServiceSpecificCredentialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateServiceSpecificCredentialRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}