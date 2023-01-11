package openapisdk.models.operations;



public class ClinicalNoteTemplatesReadRequest {
    public ClinicalNoteTemplatesReadPathParams pathParams;
    public ClinicalNoteTemplatesReadRequest withPathParams(ClinicalNoteTemplatesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNoteTemplatesReadQueryParams queryParams;
    public ClinicalNoteTemplatesReadRequest withQueryParams(ClinicalNoteTemplatesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteTemplatesReadSecurity security;
    public ClinicalNoteTemplatesReadRequest withSecurity(ClinicalNoteTemplatesReadSecurity security) {
        this.security = security;
        return this;
    }
}