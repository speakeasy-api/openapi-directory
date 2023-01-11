package openapisdk.models.operations;



public class GetItemFilesResponse {
    public String contentType;
    public GetItemFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetItemFilesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.File[] files;
    public GetItemFilesResponse withFiles(openapisdk.models.shared.File[] files) {
        this.files = files;
        return this;
    }
    public Long statusCode;
    public GetItemFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}