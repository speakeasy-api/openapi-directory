package openapisdk.models.operations;



public class GetAdminAccountResponse {
    public String contentType;
    public GetAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAdminAccountResponse getAdminAccountResponse;
    public GetAdminAccountResponse withGetAdminAccountResponse(openapisdk.models.shared.GetAdminAccountResponse getAdminAccountResponse) {
        this.getAdminAccountResponse = getAdminAccountResponse;
        return this;
    }
    public Object internalErrorException;
    public GetAdminAccountResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public GetAdminAccountResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}