package openapisdk.models.operations;



public class ClinicalNoteFieldValuesUpdateRequest {
    public ClinicalNoteFieldValuesUpdatePathParams pathParams;
    public ClinicalNoteFieldValuesUpdateRequest withPathParams(ClinicalNoteFieldValuesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNoteFieldValuesUpdateQueryParams queryParams;
    public ClinicalNoteFieldValuesUpdateRequest withQueryParams(ClinicalNoteFieldValuesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldValuesUpdateSecurity security;
    public ClinicalNoteFieldValuesUpdateRequest withSecurity(ClinicalNoteFieldValuesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}