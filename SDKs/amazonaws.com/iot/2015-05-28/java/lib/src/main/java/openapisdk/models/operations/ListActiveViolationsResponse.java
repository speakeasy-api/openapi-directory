package openapisdk.models.operations;



public class ListActiveViolationsResponse {
    public String contentType;
    public ListActiveViolationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListActiveViolationsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListActiveViolationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListActiveViolationsResponse listActiveViolationsResponse;
    public ListActiveViolationsResponse withListActiveViolationsResponse(openapisdk.models.shared.ListActiveViolationsResponse listActiveViolationsResponse) {
        this.listActiveViolationsResponse = listActiveViolationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListActiveViolationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListActiveViolationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListActiveViolationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}