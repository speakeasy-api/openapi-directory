package openapisdk.models.operations;



public class DetectDocumentTextResponse {
    public Object accessDeniedException;
    public DetectDocumentTextResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badDocumentException;
    public DetectDocumentTextResponse withBadDocumentException(Object badDocumentException) {
        this.badDocumentException = badDocumentException;
        return this;
    }
    public String contentType;
    public DetectDocumentTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectDocumentTextResponse detectDocumentTextResponse;
    public DetectDocumentTextResponse withDetectDocumentTextResponse(openapisdk.models.shared.DetectDocumentTextResponse detectDocumentTextResponse) {
        this.detectDocumentTextResponse = detectDocumentTextResponse;
        return this;
    }
    public Object documentTooLargeException;
    public DetectDocumentTextResponse withDocumentTooLargeException(Object documentTooLargeException) {
        this.documentTooLargeException = documentTooLargeException;
        return this;
    }
    public Object internalServerError;
    public DetectDocumentTextResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public DetectDocumentTextResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public DetectDocumentTextResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DetectDocumentTextResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public DetectDocumentTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetectDocumentTextResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedDocumentException;
    public DetectDocumentTextResponse withUnsupportedDocumentException(Object unsupportedDocumentException) {
        this.unsupportedDocumentException = unsupportedDocumentException;
        return this;
    }
}