package openapisdk.models.operations;



public class SearchFacesByImageResponse {
    public Object accessDeniedException;
    public SearchFacesByImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchFacesByImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageTooLargeException;
    public SearchFacesByImageResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public SearchFacesByImageResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public SearchFacesByImageResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public SearchFacesByImageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public SearchFacesByImageResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public SearchFacesByImageResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchFacesByImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchFacesByImageResponse searchFacesByImageResponse;
    public SearchFacesByImageResponse withSearchFacesByImageResponse(openapisdk.models.shared.SearchFacesByImageResponse searchFacesByImageResponse) {
        this.searchFacesByImageResponse = searchFacesByImageResponse;
        return this;
    }
    public Long statusCode;
    public SearchFacesByImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchFacesByImageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}