package openapisdk.models.operations;



public class ClinicalNoteFieldTypesReadRequest {
    public ClinicalNoteFieldTypesReadPathParams pathParams;
    public ClinicalNoteFieldTypesReadRequest withPathParams(ClinicalNoteFieldTypesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNoteFieldTypesReadQueryParams queryParams;
    public ClinicalNoteFieldTypesReadRequest withQueryParams(ClinicalNoteFieldTypesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldTypesReadSecurity security;
    public ClinicalNoteFieldTypesReadRequest withSecurity(ClinicalNoteFieldTypesReadSecurity security) {
        this.security = security;
        return this;
    }
}