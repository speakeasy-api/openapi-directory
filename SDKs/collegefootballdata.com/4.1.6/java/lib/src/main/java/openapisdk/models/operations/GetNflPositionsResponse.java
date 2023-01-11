package openapisdk.models.operations;



public class GetNflPositionsResponse {
    public String contentType;
    public GetNflPositionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DraftPosition[] draftPositions;
    public GetNflPositionsResponse withDraftPositions(openapisdk.models.shared.DraftPosition[] draftPositions) {
        this.draftPositions = draftPositions;
        return this;
    }
    public Long statusCode;
    public GetNflPositionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}