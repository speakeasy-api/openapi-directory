package openapisdk.models.operations;



public class GetLabelDetectionResponse {
    public Object accessDeniedException;
    public GetLabelDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLabelDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLabelDetectionResponse getLabelDetectionResponse;
    public GetLabelDetectionResponse withGetLabelDetectionResponse(openapisdk.models.shared.GetLabelDetectionResponse getLabelDetectionResponse) {
        this.getLabelDetectionResponse = getLabelDetectionResponse;
        return this;
    }
    public Object internalServerError;
    public GetLabelDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public GetLabelDetectionResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetLabelDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetLabelDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLabelDetectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLabelDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLabelDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}