package openapisdk.models.operations;



public class GetDocumentTextDetectionResponse {
    public Object accessDeniedException;
    public GetDocumentTextDetectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDocumentTextDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDocumentTextDetectionResponse getDocumentTextDetectionResponse;
    public GetDocumentTextDetectionResponse withGetDocumentTextDetectionResponse(openapisdk.models.shared.GetDocumentTextDetectionResponse getDocumentTextDetectionResponse) {
        this.getDocumentTextDetectionResponse = getDocumentTextDetectionResponse;
        return this;
    }
    public Object internalServerError;
    public GetDocumentTextDetectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidJobIdException;
    public GetDocumentTextDetectionResponse withInvalidJobIdException(Object invalidJobIdException) {
        this.invalidJobIdException = invalidJobIdException;
        return this;
    }
    public Object invalidKMSKeyException;
    public GetDocumentTextDetectionResponse withInvalidKmsKeyException(Object invalidKMSKeyException) {
        this.invalidKMSKeyException = invalidKMSKeyException;
        return this;
    }
    public Object invalidParameterException;
    public GetDocumentTextDetectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public GetDocumentTextDetectionResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetDocumentTextDetectionResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public GetDocumentTextDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDocumentTextDetectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}