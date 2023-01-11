package openapisdk.models.operations;



public class ClinicalNoteFieldValuesPartialUpdateRequest {
    public ClinicalNoteFieldValuesPartialUpdatePathParams pathParams;
    public ClinicalNoteFieldValuesPartialUpdateRequest withPathParams(ClinicalNoteFieldValuesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClinicalNoteFieldValuesPartialUpdateQueryParams queryParams;
    public ClinicalNoteFieldValuesPartialUpdateRequest withQueryParams(ClinicalNoteFieldValuesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldValuesPartialUpdateSecurity security;
    public ClinicalNoteFieldValuesPartialUpdateRequest withSecurity(ClinicalNoteFieldValuesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}