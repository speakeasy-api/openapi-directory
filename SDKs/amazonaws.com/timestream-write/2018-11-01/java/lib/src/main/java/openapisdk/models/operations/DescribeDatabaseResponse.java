package openapisdk.models.operations;



public class DescribeDatabaseResponse {
    public Object accessDeniedException;
    public DescribeDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatabaseResponse describeDatabaseResponse;
    public DescribeDatabaseResponse withDescribeDatabaseResponse(openapisdk.models.shared.DescribeDatabaseResponse describeDatabaseResponse) {
        this.describeDatabaseResponse = describeDatabaseResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDatabaseResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public DescribeDatabaseResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatabaseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDatabaseResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeDatabaseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}