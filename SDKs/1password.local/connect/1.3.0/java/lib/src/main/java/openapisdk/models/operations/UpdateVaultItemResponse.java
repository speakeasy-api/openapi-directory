package openapisdk.models.operations;



public class UpdateVaultItemResponse {
    public String contentType;
    public UpdateVaultItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateVaultItemResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.FullItem fullItem;
    public UpdateVaultItemResponse withFullItem(openapisdk.models.shared.FullItem fullItem) {
        this.fullItem = fullItem;
        return this;
    }
    public Long statusCode;
    public UpdateVaultItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}