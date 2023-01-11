package openapisdk.models.operations;



public class GetCostEstimationResponse {
    public Object accessDeniedException;
    public GetCostEstimationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetCostEstimationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCostEstimationResponse getCostEstimationResponse;
    public GetCostEstimationResponse withGetCostEstimationResponse(openapisdk.models.shared.GetCostEstimationResponse getCostEstimationResponse) {
        this.getCostEstimationResponse = getCostEstimationResponse;
        return this;
    }
    public Object internalServerException;
    public GetCostEstimationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCostEstimationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCostEstimationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCostEstimationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetCostEstimationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}