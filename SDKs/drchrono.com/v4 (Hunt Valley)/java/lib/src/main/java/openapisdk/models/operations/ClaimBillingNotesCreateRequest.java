package openapisdk.models.operations;



public class ClaimBillingNotesCreateRequest {
    public ClaimBillingNotesCreateQueryParams queryParams;
    public ClaimBillingNotesCreateRequest withQueryParams(ClaimBillingNotesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClaimBillingNotesCreateSecurity security;
    public ClaimBillingNotesCreateRequest withSecurity(ClaimBillingNotesCreateSecurity security) {
        this.security = security;
        return this;
    }
}