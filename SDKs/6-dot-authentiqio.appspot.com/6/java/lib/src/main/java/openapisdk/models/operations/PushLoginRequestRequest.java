package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PushLoginRequestRequest {
    public PushLoginRequestQueryParams queryParams;
    public PushLoginRequestRequest withQueryParams(PushLoginRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public byte[] request;
    public PushLoginRequestRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}