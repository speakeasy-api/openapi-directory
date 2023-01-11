package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IlpmtRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IlpmtRequestBody request;
    public IlpmtRequest withRequest(IlpmtRequestBody request) {
        this.request = request;
        return this;
    }
    public IlpmtSecurity security;
    public IlpmtRequest withSecurity(IlpmtSecurity security) {
        this.security = security;
        return this;
    }
}