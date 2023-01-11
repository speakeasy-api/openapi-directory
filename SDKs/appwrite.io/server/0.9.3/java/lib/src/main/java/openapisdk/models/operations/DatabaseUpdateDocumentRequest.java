package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseUpdateDocumentRequest {
    public DatabaseUpdateDocumentPathParams pathParams;
    public DatabaseUpdateDocumentRequest withPathParams(DatabaseUpdateDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DatabaseUpdateDocumentRequestBody request;
    public DatabaseUpdateDocumentRequest withRequest(DatabaseUpdateDocumentRequestBody request) {
        this.request = request;
        return this;
    }
    public DatabaseUpdateDocumentSecurity security;
    public DatabaseUpdateDocumentRequest withSecurity(DatabaseUpdateDocumentSecurity security) {
        this.security = security;
        return this;
    }
}