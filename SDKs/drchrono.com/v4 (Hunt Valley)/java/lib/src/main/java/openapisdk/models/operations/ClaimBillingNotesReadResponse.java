package openapisdk.models.operations;



public class ClaimBillingNotesReadResponse {
    public openapisdk.models.shared.ClaimBillingNotes claimBillingNotes;
    public ClaimBillingNotesReadResponse withClaimBillingNotes(openapisdk.models.shared.ClaimBillingNotes claimBillingNotes) {
        this.claimBillingNotes = claimBillingNotes;
        return this;
    }
    public String contentType;
    public ClaimBillingNotesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClaimBillingNotesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}