package openapisdk.models.operations;



public class GetVaultItemsResponse {
    public String contentType;
    public GetVaultItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetVaultItemsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Item[] items;
    public GetVaultItemsResponse withItems(openapisdk.models.shared.Item[] items) {
        this.items = items;
        return this;
    }
    public Long statusCode;
    public GetVaultItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}