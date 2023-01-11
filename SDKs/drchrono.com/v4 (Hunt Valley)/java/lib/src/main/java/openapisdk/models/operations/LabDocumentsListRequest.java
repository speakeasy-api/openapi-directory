package openapisdk.models.operations;



public class LabDocumentsListRequest {
    public LabDocumentsListQueryParams queryParams;
    public LabDocumentsListRequest withQueryParams(LabDocumentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabDocumentsListSecurity security;
    public LabDocumentsListRequest withSecurity(LabDocumentsListSecurity security) {
        this.security = security;
        return this;
    }
}