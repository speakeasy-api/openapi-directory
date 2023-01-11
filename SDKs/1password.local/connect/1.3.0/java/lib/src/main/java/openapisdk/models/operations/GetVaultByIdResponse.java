package openapisdk.models.operations;



public class GetVaultByIdResponse {
    public String contentType;
    public GetVaultByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetVaultByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetVaultByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vault vault;
    public GetVaultByIdResponse withVault(openapisdk.models.shared.Vault vault) {
        this.vault = vault;
        return this;
    }
}