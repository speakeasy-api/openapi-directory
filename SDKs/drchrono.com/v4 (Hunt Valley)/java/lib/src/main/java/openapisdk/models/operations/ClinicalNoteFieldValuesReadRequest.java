package openapisdk.models.operations;



public class ClinicalNoteFieldValuesReadRequest {
    public ClinicalNoteFieldValuesReadPathParams pathParams;
    public ClinicalNoteFieldValuesReadRequest withPathParams(ClinicalNoteFieldValuesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNoteFieldValuesReadQueryParams queryParams;
    public ClinicalNoteFieldValuesReadRequest withQueryParams(ClinicalNoteFieldValuesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldValuesReadSecurity security;
    public ClinicalNoteFieldValuesReadRequest withSecurity(ClinicalNoteFieldValuesReadSecurity security) {
        this.security = security;
        return this;
    }
}