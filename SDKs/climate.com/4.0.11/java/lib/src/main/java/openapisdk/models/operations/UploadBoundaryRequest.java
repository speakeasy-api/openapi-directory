package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadBoundaryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UploadBoundaryRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UploadBoundarySecurity security;
    public UploadBoundaryRequest withSecurity(UploadBoundarySecurity security) {
        this.security = security;
        return this;
    }
}