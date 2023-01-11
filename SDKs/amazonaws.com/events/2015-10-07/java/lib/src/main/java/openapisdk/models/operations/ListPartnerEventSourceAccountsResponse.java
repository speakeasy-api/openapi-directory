package openapisdk.models.operations;



public class ListPartnerEventSourceAccountsResponse {
    public String contentType;
    public ListPartnerEventSourceAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListPartnerEventSourceAccountsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListPartnerEventSourceAccountsResponse listPartnerEventSourceAccountsResponse;
    public ListPartnerEventSourceAccountsResponse withListPartnerEventSourceAccountsResponse(openapisdk.models.shared.ListPartnerEventSourceAccountsResponse listPartnerEventSourceAccountsResponse) {
        this.listPartnerEventSourceAccountsResponse = listPartnerEventSourceAccountsResponse;
        return this;
    }
    public Object operationDisabledException;
    public ListPartnerEventSourceAccountsResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPartnerEventSourceAccountsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPartnerEventSourceAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}