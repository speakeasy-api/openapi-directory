package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignUpIdRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public SignUpIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public SignUpIdSecurity security;
    public SignUpIdRequest withSecurity(SignUpIdSecurity security) {
        this.security = security;
        return this;
    }
}