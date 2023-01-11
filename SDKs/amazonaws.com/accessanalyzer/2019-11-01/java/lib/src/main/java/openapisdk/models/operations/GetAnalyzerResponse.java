package openapisdk.models.operations;



public class GetAnalyzerResponse {
    public Object accessDeniedException;
    public GetAnalyzerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAnalyzerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAnalyzerResponse getAnalyzerResponse;
    public GetAnalyzerResponse withGetAnalyzerResponse(openapisdk.models.shared.GetAnalyzerResponse getAnalyzerResponse) {
        this.getAnalyzerResponse = getAnalyzerResponse;
        return this;
    }
    public Object internalServerException;
    public GetAnalyzerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAnalyzerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAnalyzerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAnalyzerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAnalyzerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}