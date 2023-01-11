package openapisdk.models.operations;



public class StartQueryResponse {
    public String contentType;
    public StartQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public StartQueryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public StartQueryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedQueryException;
    public StartQueryResponse withMalformedQueryException(Object malformedQueryException) {
        this.malformedQueryException = malformedQueryException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartQueryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartQueryResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartQueryResponse startQueryResponse;
    public StartQueryResponse withStartQueryResponse(openapisdk.models.shared.StartQueryResponse startQueryResponse) {
        this.startQueryResponse = startQueryResponse;
        return this;
    }
    public Long statusCode;
    public StartQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}