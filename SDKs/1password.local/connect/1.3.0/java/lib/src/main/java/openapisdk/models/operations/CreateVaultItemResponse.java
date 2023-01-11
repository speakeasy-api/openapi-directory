package openapisdk.models.operations;



public class CreateVaultItemResponse {
    public String contentType;
    public CreateVaultItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateVaultItemResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.FullItem fullItem;
    public CreateVaultItemResponse withFullItem(openapisdk.models.shared.FullItem fullItem) {
        this.fullItem = fullItem;
        return this;
    }
    public Long statusCode;
    public CreateVaultItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}