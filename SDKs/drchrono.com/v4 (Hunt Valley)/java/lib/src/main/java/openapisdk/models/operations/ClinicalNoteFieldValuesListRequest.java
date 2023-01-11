package openapisdk.models.operations;



public class ClinicalNoteFieldValuesListRequest {
    public ClinicalNoteFieldValuesListQueryParams queryParams;
    public ClinicalNoteFieldValuesListRequest withQueryParams(ClinicalNoteFieldValuesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldValuesListSecurity security;
    public ClinicalNoteFieldValuesListRequest withSecurity(ClinicalNoteFieldValuesListSecurity security) {
        this.security = security;
        return this;
    }
}