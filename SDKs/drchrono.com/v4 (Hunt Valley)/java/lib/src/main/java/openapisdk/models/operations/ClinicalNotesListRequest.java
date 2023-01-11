package openapisdk.models.operations;



public class ClinicalNotesListRequest {
    public ClinicalNotesListQueryParams queryParams;
    public ClinicalNotesListRequest withQueryParams(ClinicalNotesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNotesListSecurity security;
    public ClinicalNotesListRequest withSecurity(ClinicalNotesListSecurity security) {
        this.security = security;
        return this;
    }
}