package openapisdk.models.operations;



public class ListSafetyRulesResponse {
    public Object accessDeniedException;
    public ListSafetyRulesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListSafetyRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSafetyRulesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSafetyRulesResponse listSafetyRulesResponse;
    public ListSafetyRulesResponse withListSafetyRulesResponse(openapisdk.models.shared.ListSafetyRulesResponse listSafetyRulesResponse) {
        this.listSafetyRulesResponse = listSafetyRulesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSafetyRulesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSafetyRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSafetyRulesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListSafetyRulesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}