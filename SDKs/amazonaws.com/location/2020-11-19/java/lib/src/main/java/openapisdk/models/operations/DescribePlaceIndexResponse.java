package openapisdk.models.operations;



public class DescribePlaceIndexResponse {
    public Object accessDeniedException;
    public DescribePlaceIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribePlaceIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePlaceIndexResponse describePlaceIndexResponse;
    public DescribePlaceIndexResponse withDescribePlaceIndexResponse(openapisdk.models.shared.DescribePlaceIndexResponse describePlaceIndexResponse) {
        this.describePlaceIndexResponse = describePlaceIndexResponse;
        return this;
    }
    public Object internalServerException;
    public DescribePlaceIndexResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePlaceIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePlaceIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribePlaceIndexResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribePlaceIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}