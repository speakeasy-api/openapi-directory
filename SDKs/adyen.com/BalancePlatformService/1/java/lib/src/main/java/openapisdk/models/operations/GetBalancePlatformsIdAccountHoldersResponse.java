package openapisdk.models.operations;



public class GetBalancePlatformsIdAccountHoldersResponse {
    public String contentType;
    public GetBalancePlatformsIdAccountHoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paginatedAccountHoldersResponse;
    public GetBalancePlatformsIdAccountHoldersResponse withPaginatedAccountHoldersResponse(Object paginatedAccountHoldersResponse) {
        this.paginatedAccountHoldersResponse = paginatedAccountHoldersResponse;
        return this;
    }
    public Object restServiceError;
    public GetBalancePlatformsIdAccountHoldersResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetBalancePlatformsIdAccountHoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}