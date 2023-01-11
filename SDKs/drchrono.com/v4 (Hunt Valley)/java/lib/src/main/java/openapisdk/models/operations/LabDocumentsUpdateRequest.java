package openapisdk.models.operations;



public class LabDocumentsUpdateRequest {
    public LabDocumentsUpdatePathParams pathParams;
    public LabDocumentsUpdateRequest withPathParams(LabDocumentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabDocumentsUpdateQueryParams queryParams;
    public LabDocumentsUpdateRequest withQueryParams(LabDocumentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabDocumentsUpdateSecurity security;
    public LabDocumentsUpdateRequest withSecurity(LabDocumentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}