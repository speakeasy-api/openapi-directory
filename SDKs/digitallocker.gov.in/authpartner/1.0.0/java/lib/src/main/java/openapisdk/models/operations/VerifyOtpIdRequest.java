package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyOtpIdRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public VerifyOtpIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public VerifyOtpIdSecurity security;
    public VerifyOtpIdRequest withSecurity(VerifyOtpIdSecurity security) {
        this.security = security;
        return this;
    }
}