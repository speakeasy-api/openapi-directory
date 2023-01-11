package openapisdk.models.operations;



public class ClaimBillingNotesListResponse {
    public String contentType;
    public ClaimBillingNotesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClaimBillingNotesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ClaimBillingNotesList200ApplicationJson claimBillingNotesList200ApplicationJSONObject;
    public ClaimBillingNotesListResponse withClaimBillingNotesList200ApplicationJsonObject(ClaimBillingNotesList200ApplicationJson claimBillingNotesList200ApplicationJSONObject) {
        this.claimBillingNotesList200ApplicationJSONObject = claimBillingNotesList200ApplicationJSONObject;
        return this;
    }
}