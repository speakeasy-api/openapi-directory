package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionsCreateRequest {
    public SessionsCreateHeaders headers;
    public SessionsCreateRequest withHeaders(SessionsCreateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Session request;
    public SessionsCreateRequest withRequest(openapisdk.models.shared.Session request) {
        this.request = request;
        return this;
    }
    public SessionsCreateSecurity security;
    public SessionsCreateRequest withSecurity(SessionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}