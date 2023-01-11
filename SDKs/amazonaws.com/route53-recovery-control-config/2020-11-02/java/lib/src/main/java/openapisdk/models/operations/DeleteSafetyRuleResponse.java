package openapisdk.models.operations;



public class DeleteSafetyRuleResponse {
    public String contentType;
    public DeleteSafetyRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSafetyRuleResponse;
    public DeleteSafetyRuleResponse withDeleteSafetyRuleResponse(java.util.Map<String, Object> deleteSafetyRuleResponse) {
        this.deleteSafetyRuleResponse = deleteSafetyRuleResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteSafetyRuleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSafetyRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSafetyRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteSafetyRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}