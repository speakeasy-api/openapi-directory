package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PushUriToAccountIdRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public PushUriToAccountIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PushUriToAccountIdSecurity security;
    public PushUriToAccountIdRequest withSecurity(PushUriToAccountIdSecurity security) {
        this.security = security;
        return this;
    }
}