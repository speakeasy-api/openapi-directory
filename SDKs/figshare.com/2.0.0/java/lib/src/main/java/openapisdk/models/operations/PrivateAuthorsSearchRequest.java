package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateAuthorsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateAuthorsSearch request;
    public PrivateAuthorsSearchRequest withRequest(openapisdk.models.shared.PrivateAuthorsSearch request) {
        this.request = request;
        return this;
    }
    public PrivateAuthorsSearchSecurity security;
    public PrivateAuthorsSearchRequest withSecurity(PrivateAuthorsSearchSecurity security) {
        this.security = security;
        return this;
    }
}