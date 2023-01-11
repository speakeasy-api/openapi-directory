package openapisdk.models.operations;



public class LabDocumentsCreateRequest {
    public LabDocumentsCreateQueryParams queryParams;
    public LabDocumentsCreateRequest withQueryParams(LabDocumentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabDocumentsCreateSecurity security;
    public LabDocumentsCreateRequest withSecurity(LabDocumentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}