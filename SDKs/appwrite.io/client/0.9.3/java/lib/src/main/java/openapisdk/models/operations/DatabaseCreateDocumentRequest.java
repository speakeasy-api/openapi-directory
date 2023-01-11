package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseCreateDocumentRequest {
    public DatabaseCreateDocumentPathParams pathParams;
    public DatabaseCreateDocumentRequest withPathParams(DatabaseCreateDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DatabaseCreateDocumentRequestBody request;
    public DatabaseCreateDocumentRequest withRequest(DatabaseCreateDocumentRequestBody request) {
        this.request = request;
        return this;
    }
    public DatabaseCreateDocumentSecurity security;
    public DatabaseCreateDocumentRequest withSecurity(DatabaseCreateDocumentSecurity security) {
        this.security = security;
        return this;
    }
}