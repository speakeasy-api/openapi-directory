package openapisdk.models.operations;



public class ClinicalNoteFieldTypesListRequest {
    public ClinicalNoteFieldTypesListQueryParams queryParams;
    public ClinicalNoteFieldTypesListRequest withQueryParams(ClinicalNoteFieldTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteFieldTypesListSecurity security;
    public ClinicalNoteFieldTypesListRequest withSecurity(ClinicalNoteFieldTypesListSecurity security) {
        this.security = security;
        return this;
    }
}