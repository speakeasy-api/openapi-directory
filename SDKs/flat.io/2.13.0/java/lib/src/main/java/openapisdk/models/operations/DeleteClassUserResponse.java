package openapisdk.models.operations;



public class DeleteClassUserResponse {
    public String contentType;
    public DeleteClassUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public DeleteClassUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteClassUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}