package openapisdk.models.operations;



public class ClinicalNoteFieldValuesCreateRequest {
    public ClinicalNoteFieldValuesCreateQueryParams queryParams;
    public ClinicalNoteFieldValuesCreateRequest withQueryParams(ClinicalNoteFieldValuesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldValuesCreateSecurity security;
    public ClinicalNoteFieldValuesCreateRequest withSecurity(ClinicalNoteFieldValuesCreateSecurity security) {
        this.security = security;
        return this;
    }
}