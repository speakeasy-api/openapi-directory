package openapisdk.models.operations;



public class CreateAnalyzerResponse {
    public Object accessDeniedException;
    public CreateAnalyzerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateAnalyzerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAnalyzerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAnalyzerResponse createAnalyzerResponse;
    public CreateAnalyzerResponse withCreateAnalyzerResponse(openapisdk.models.shared.CreateAnalyzerResponse createAnalyzerResponse) {
        this.createAnalyzerResponse = createAnalyzerResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAnalyzerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAnalyzerResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAnalyzerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAnalyzerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateAnalyzerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}