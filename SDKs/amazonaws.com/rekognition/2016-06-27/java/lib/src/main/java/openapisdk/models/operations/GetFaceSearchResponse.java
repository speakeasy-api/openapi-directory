package openapisdk.models.operations;



public class GetFaceSearchResponse {
    public Object accessDeniedException;
    public GetFaceSearchResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFaceSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFaceSearchResponse getFaceSearchResponse;
    public GetFaceSearchResponse withGetFaceSearchResponse(openapisdk.models.shared.GetFaceSearchResponse getFaceSearchResponse) {
        this.getFaceSearchResponse = getFaceSearchResponse;
        return this;
    }
    public Object internalServerError;
    public GetFaceSearchResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public GetFaceSearchResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetFaceSearchResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetFaceSearchResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFaceSearchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFaceSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFaceSearchResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}