package openapisdk.models.operations;



public class RecognizeCelebritiesResponse {
    public Object accessDeniedException;
    public RecognizeCelebritiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RecognizeCelebritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageTooLargeException;
    public RecognizeCelebritiesResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public RecognizeCelebritiesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public RecognizeCelebritiesResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public RecognizeCelebritiesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public RecognizeCelebritiesResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public RecognizeCelebritiesResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.RecognizeCelebritiesResponse recognizeCelebritiesResponse;
    public RecognizeCelebritiesResponse withRecognizeCelebritiesResponse(openapisdk.models.shared.RecognizeCelebritiesResponse recognizeCelebritiesResponse) {
        this.recognizeCelebritiesResponse = recognizeCelebritiesResponse;
        return this;
    }
    public Long statusCode;
    public RecognizeCelebritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RecognizeCelebritiesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}