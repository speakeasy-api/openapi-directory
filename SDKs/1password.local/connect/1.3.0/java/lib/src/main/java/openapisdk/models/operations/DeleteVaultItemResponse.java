package openapisdk.models.operations;



public class DeleteVaultItemResponse {
    public String contentType;
    public DeleteVaultItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteVaultItemResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteVaultItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}