package openapisdk.models.operations;



public class GetFormEntriesResponse {
    public String contentType;
    public GetFormEntriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormEntryResponse formEntryResponse;
    public GetFormEntriesResponse withFormEntryResponse(openapisdk.models.shared.FormEntryResponse formEntryResponse) {
        this.formEntryResponse = formEntryResponse;
        return this;
    }
    public Long statusCode;
    public GetFormEntriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}