package openapisdk.models.operations;



public class UpdateSafetyRuleResponse {
    public String contentType;
    public UpdateSafetyRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSafetyRuleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSafetyRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSafetyRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSafetyRuleResponse updateSafetyRuleResponse;
    public UpdateSafetyRuleResponse withUpdateSafetyRuleResponse(openapisdk.models.shared.UpdateSafetyRuleResponse updateSafetyRuleResponse) {
        this.updateSafetyRuleResponse = updateSafetyRuleResponse;
        return this;
    }
    public Object validationException;
    public UpdateSafetyRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}