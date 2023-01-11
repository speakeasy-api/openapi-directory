package openapisdk.models.operations;



public class DeleteSubmissionResponse {
    public String contentType;
    public DeleteSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public DeleteSubmissionResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}