package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyAccountIdRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public VerifyAccountIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public VerifyAccountIdSecurity security;
    public VerifyAccountIdRequest withSecurity(VerifyAccountIdSecurity security) {
        this.security = security;
        return this;
    }
}