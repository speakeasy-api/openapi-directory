package openapisdk.models.operations;



public class DetectFacesResponse {
    public Object accessDeniedException;
    public DetectFacesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetectFacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectFacesResponse detectFacesResponse;
    public DetectFacesResponse withDetectFacesResponse(openapisdk.models.shared.DetectFacesResponse detectFacesResponse) {
        this.detectFacesResponse = detectFacesResponse;
        return this;
    }
    public Object imageTooLargeException;
    public DetectFacesResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public DetectFacesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public DetectFacesResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public DetectFacesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public DetectFacesResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DetectFacesResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public DetectFacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetectFacesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}