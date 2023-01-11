package openapisdk.models.operations;



public class DeleteScoreResponse {
    public String contentType;
    public DeleteScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public DeleteScoreResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}