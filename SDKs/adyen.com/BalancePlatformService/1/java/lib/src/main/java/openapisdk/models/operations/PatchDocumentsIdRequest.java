package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDocumentsIdRequest {
    public PatchDocumentsIdPathParams pathParams;
    public PatchDocumentsIdRequest withPathParams(PatchDocumentsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchDocumentsIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchDocumentsIdSecurity security;
    public PatchDocumentsIdRequest withSecurity(PatchDocumentsIdSecurity security) {
        this.security = security;
        return this;
    }
}