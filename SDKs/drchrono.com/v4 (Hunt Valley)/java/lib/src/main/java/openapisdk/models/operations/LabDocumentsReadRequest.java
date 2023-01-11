package openapisdk.models.operations;



public class LabDocumentsReadRequest {
    public LabDocumentsReadPathParams pathParams;
    public LabDocumentsReadRequest withPathParams(LabDocumentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabDocumentsReadQueryParams queryParams;
    public LabDocumentsReadRequest withQueryParams(LabDocumentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabDocumentsReadSecurity security;
    public LabDocumentsReadRequest withSecurity(LabDocumentsReadSecurity security) {
        this.security = security;
        return this;
    }
}