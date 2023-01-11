package openapisdk.models.operations;



public class PatchVaultItemResponse {
    public String contentType;
    public PatchVaultItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PatchVaultItemResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.FullItem fullItem;
    public PatchVaultItemResponse withFullItem(openapisdk.models.shared.FullItem fullItem) {
        this.fullItem = fullItem;
        return this;
    }
    public Long statusCode;
    public PatchVaultItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}