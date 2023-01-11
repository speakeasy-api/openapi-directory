package openapisdk.models.operations;



public class CreateSafetyRuleResponse {
    public String contentType;
    public CreateSafetyRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSafetyRuleResponse createSafetyRuleResponse;
    public CreateSafetyRuleResponse withCreateSafetyRuleResponse(openapisdk.models.shared.CreateSafetyRuleResponse createSafetyRuleResponse) {
        this.createSafetyRuleResponse = createSafetyRuleResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSafetyRuleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateSafetyRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateSafetyRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}