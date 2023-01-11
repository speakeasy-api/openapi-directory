package openapisdk.models.operations;



public class GetDraftPicksResponse {
    public String contentType;
    public GetDraftPicksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DraftPick[] draftPicks;
    public GetDraftPicksResponse withDraftPicks(openapisdk.models.shared.DraftPick[] draftPicks) {
        this.draftPicks = draftPicks;
        return this;
    }
    public Long statusCode;
    public GetDraftPicksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}