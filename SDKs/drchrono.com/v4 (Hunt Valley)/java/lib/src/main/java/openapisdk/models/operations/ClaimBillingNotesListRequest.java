package openapisdk.models.operations;



public class ClaimBillingNotesListRequest {
    public ClaimBillingNotesListQueryParams queryParams;
    public ClaimBillingNotesListRequest withQueryParams(ClaimBillingNotesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClaimBillingNotesListSecurity security;
    public ClaimBillingNotesListRequest withSecurity(ClaimBillingNotesListSecurity security) {
        this.security = security;
        return this;
    }
}