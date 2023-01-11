package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignRequestRequest {
    public SignRequestQueryParams queryParams;
    public SignRequestRequest withQueryParams(SignRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public byte[] request;
    public SignRequestRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}