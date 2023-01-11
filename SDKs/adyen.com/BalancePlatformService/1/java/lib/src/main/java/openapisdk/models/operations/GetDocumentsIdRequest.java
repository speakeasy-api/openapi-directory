package openapisdk.models.operations;



public class GetDocumentsIdRequest {
    public GetDocumentsIdPathParams pathParams;
    public GetDocumentsIdRequest withPathParams(GetDocumentsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDocumentsIdSecurity security;
    public GetDocumentsIdRequest withSecurity(GetDocumentsIdSecurity security) {
        this.security = security;
        return this;
    }
}