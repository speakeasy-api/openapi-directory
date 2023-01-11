package openapisdk.models.operations;



public class GetVaultItemByIdResponse {
    public String contentType;
    public GetVaultItemByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetVaultItemByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.FullItem fullItem;
    public GetVaultItemByIdResponse withFullItem(openapisdk.models.shared.FullItem fullItem) {
        this.fullItem = fullItem;
        return this;
    }
    public Long statusCode;
    public GetVaultItemByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}