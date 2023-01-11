package openapisdk.models.operations;



public class GetLogRecordResponse {
    public String contentType;
    public GetLogRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLogRecordResponse getLogRecordResponse;
    public GetLogRecordResponse withGetLogRecordResponse(openapisdk.models.shared.GetLogRecordResponse getLogRecordResponse) {
        this.getLogRecordResponse = getLogRecordResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetLogRecordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public GetLogRecordResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLogRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetLogRecordResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetLogRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}