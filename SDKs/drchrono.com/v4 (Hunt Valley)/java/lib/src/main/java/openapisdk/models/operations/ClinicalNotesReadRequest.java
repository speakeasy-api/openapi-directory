package openapisdk.models.operations;



public class ClinicalNotesReadRequest {
    public ClinicalNotesReadPathParams pathParams;
    public ClinicalNotesReadRequest withPathParams(ClinicalNotesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNotesReadQueryParams queryParams;
    public ClinicalNotesReadRequest withQueryParams(ClinicalNotesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNotesReadSecurity security;
    public ClinicalNotesReadRequest withSecurity(ClinicalNotesReadSecurity security) {
        this.security = security;
        return this;
    }
}