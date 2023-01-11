package openapisdk.models.operations;



public class ClaimBillingNotesReadRequest {
    public ClaimBillingNotesReadPathParams pathParams;
    public ClaimBillingNotesReadRequest withPathParams(ClaimBillingNotesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClaimBillingNotesReadQueryParams queryParams;
    public ClaimBillingNotesReadRequest withQueryParams(ClaimBillingNotesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClaimBillingNotesReadSecurity security;
    public ClaimBillingNotesReadRequest withSecurity(ClaimBillingNotesReadSecurity security) {
        this.security = security;
        return this;
    }
}