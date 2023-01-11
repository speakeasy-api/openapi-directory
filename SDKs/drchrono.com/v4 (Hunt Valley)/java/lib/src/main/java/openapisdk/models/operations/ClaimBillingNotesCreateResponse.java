package openapisdk.models.operations;



public class ClaimBillingNotesCreateResponse {
    public openapisdk.models.shared.ClaimBillingNotes claimBillingNotes;
    public ClaimBillingNotesCreateResponse withClaimBillingNotes(openapisdk.models.shared.ClaimBillingNotes claimBillingNotes) {
        this.claimBillingNotes = claimBillingNotes;
        return this;
    }
    public String contentType;
    public ClaimBillingNotesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClaimBillingNotesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}