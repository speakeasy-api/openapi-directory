package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullDocumentIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public PullDocumentIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PullDocumentIdSecurity security;
    public PullDocumentIdRequest withSecurity(PullDocumentIdSecurity security) {
        this.security = security;
        return this;
    }
}