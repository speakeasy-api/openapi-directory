package openapisdk.models.operations;



public class ListEffectiveDeploymentsResponse {
    public Object accessDeniedException;
    public ListEffectiveDeploymentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEffectiveDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEffectiveDeploymentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEffectiveDeploymentsResponse listEffectiveDeploymentsResponse;
    public ListEffectiveDeploymentsResponse withListEffectiveDeploymentsResponse(openapisdk.models.shared.ListEffectiveDeploymentsResponse listEffectiveDeploymentsResponse) {
        this.listEffectiveDeploymentsResponse = listEffectiveDeploymentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEffectiveDeploymentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEffectiveDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEffectiveDeploymentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEffectiveDeploymentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}