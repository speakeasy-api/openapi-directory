package openapisdk.models.operations;



public class GetCelebrityRecognitionResponse {
    public Object accessDeniedException;
    public GetCelebrityRecognitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetCelebrityRecognitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCelebrityRecognitionResponse getCelebrityRecognitionResponse;
    public GetCelebrityRecognitionResponse withGetCelebrityRecognitionResponse(openapisdk.models.shared.GetCelebrityRecognitionResponse getCelebrityRecognitionResponse) {
        this.getCelebrityRecognitionResponse = getCelebrityRecognitionResponse;
        return this;
    }
    public Object internalServerError;
    public GetCelebrityRecognitionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public GetCelebrityRecognitionResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetCelebrityRecognitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetCelebrityRecognitionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCelebrityRecognitionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCelebrityRecognitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCelebrityRecognitionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}