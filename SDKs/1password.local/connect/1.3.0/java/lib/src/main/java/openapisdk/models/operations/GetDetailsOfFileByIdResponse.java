package openapisdk.models.operations;



public class GetDetailsOfFileByIdResponse {
    public String contentType;
    public GetDetailsOfFileByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetDetailsOfFileByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.File file;
    public GetDetailsOfFileByIdResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public GetDetailsOfFileByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}