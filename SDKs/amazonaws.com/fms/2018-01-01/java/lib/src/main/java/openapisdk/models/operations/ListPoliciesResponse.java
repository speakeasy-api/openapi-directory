package openapisdk.models.operations;



public class ListPoliciesResponse {
    public String contentType;
    public ListPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListPoliciesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public ListPoliciesResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object limitExceededException;
    public ListPoliciesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListPoliciesResponse listPoliciesResponse;
    public ListPoliciesResponse withListPoliciesResponse(openapisdk.models.shared.ListPoliciesResponse listPoliciesResponse) {
        this.listPoliciesResponse = listPoliciesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}