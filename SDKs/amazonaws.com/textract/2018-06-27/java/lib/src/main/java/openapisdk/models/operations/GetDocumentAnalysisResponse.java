package openapisdk.models.operations;



public class GetDocumentAnalysisResponse {
    public Object accessDeniedException;
    public GetDocumentAnalysisResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDocumentAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDocumentAnalysisResponse getDocumentAnalysisResponse;
    public GetDocumentAnalysisResponse withGetDocumentAnalysisResponse(openapisdk.models.shared.GetDocumentAnalysisResponse getDocumentAnalysisResponse) {
        this.getDocumentAnalysisResponse = getDocumentAnalysisResponse;
        return this;
    }
    public Object internalServerError;
    public GetDocumentAnalysisResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidJobIdException;
    public GetDocumentAnalysisResponse withInvalidJobIdException(Object invalidJobIdException) {
        this.invalidJobIdException = invalidJobIdException;
        return this;
    }
    public Object invalidKMSKeyException;
    public GetDocumentAnalysisResponse withInvalidKmsKeyException(Object invalidKMSKeyException) {
        this.invalidKMSKeyException = invalidKMSKeyException;
        return this;
    }
    public Object invalidParameterException;
    public GetDocumentAnalysisResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public GetDocumentAnalysisResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetDocumentAnalysisResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public GetDocumentAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDocumentAnalysisResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}