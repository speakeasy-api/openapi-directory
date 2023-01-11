package openapisdk.models.operations;



public class GetVaultsResponse {
    public String contentType;
    public GetVaultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetVaultsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetVaultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vault[] vaults;
    public GetVaultsResponse withVaults(openapisdk.models.shared.Vault[] vaults) {
        this.vaults = vaults;
        return this;
    }
}