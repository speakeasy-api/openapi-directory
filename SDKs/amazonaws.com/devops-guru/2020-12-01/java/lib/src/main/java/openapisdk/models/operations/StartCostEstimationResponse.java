package openapisdk.models.operations;



public class StartCostEstimationResponse {
    public Object accessDeniedException;
    public StartCostEstimationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StartCostEstimationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartCostEstimationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartCostEstimationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartCostEstimationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> startCostEstimationResponse;
    public StartCostEstimationResponse withStartCostEstimationResponse(java.util.Map<String, Object> startCostEstimationResponse) {
        this.startCostEstimationResponse = startCostEstimationResponse;
        return this;
    }
    public Long statusCode;
    public StartCostEstimationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartCostEstimationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartCostEstimationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}