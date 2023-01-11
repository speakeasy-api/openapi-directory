package openapisdk.models.operations;



public class GetCelebrityInfoResponse {
    public Object accessDeniedException;
    public GetCelebrityInfoResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetCelebrityInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCelebrityInfoResponse getCelebrityInfoResponse;
    public GetCelebrityInfoResponse withGetCelebrityInfoResponse(openapisdk.models.shared.GetCelebrityInfoResponse getCelebrityInfoResponse) {
        this.getCelebrityInfoResponse = getCelebrityInfoResponse;
        return this;
    }
    public Object internalServerError;
    public GetCelebrityInfoResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public GetCelebrityInfoResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetCelebrityInfoResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCelebrityInfoResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCelebrityInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCelebrityInfoResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}