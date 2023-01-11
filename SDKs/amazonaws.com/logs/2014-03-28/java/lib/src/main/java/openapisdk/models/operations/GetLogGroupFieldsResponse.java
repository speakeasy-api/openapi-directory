package openapisdk.models.operations;



public class GetLogGroupFieldsResponse {
    public String contentType;
    public GetLogGroupFieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLogGroupFieldsResponse getLogGroupFieldsResponse;
    public GetLogGroupFieldsResponse withGetLogGroupFieldsResponse(openapisdk.models.shared.GetLogGroupFieldsResponse getLogGroupFieldsResponse) {
        this.getLogGroupFieldsResponse = getLogGroupFieldsResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetLogGroupFieldsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public GetLogGroupFieldsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLogGroupFieldsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetLogGroupFieldsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetLogGroupFieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}