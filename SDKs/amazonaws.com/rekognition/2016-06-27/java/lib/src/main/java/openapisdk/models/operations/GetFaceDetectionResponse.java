package openapisdk.models.operations;



public class GetFaceDetectionResponse {
    public Object accessDeniedException;
    public GetFaceDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFaceDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFaceDetectionResponse getFaceDetectionResponse;
    public GetFaceDetectionResponse withGetFaceDetectionResponse(openapisdk.models.shared.GetFaceDetectionResponse getFaceDetectionResponse) {
        this.getFaceDetectionResponse = getFaceDetectionResponse;
        return this;
    }
    public Object internalServerError;
    public GetFaceDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public GetFaceDetectionResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetFaceDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetFaceDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFaceDetectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFaceDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFaceDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}