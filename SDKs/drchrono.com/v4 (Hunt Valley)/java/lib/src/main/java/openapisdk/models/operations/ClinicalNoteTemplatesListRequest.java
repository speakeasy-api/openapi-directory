package openapisdk.models.operations;



public class ClinicalNoteTemplatesListRequest {
    public ClinicalNoteTemplatesListQueryParams queryParams;
    public ClinicalNoteTemplatesListRequest withQueryParams(ClinicalNoteTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClinicalNoteTemplatesListSecurity security;
    public ClinicalNoteTemplatesListRequest withSecurity(ClinicalNoteTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}