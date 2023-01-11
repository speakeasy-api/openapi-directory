package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAccountHoldersIdRequest {
    public PatchAccountHoldersIdPathParams pathParams;
    public PatchAccountHoldersIdRequest withPathParams(PatchAccountHoldersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchAccountHoldersIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchAccountHoldersIdSecurity security;
    public PatchAccountHoldersIdRequest withSecurity(PatchAccountHoldersIdSecurity security) {
        this.security = security;
        return this;
    }
}