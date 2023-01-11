package openapisdk.models.operations;



public class DescribeSafetyRuleResponse {
    public String contentType;
    public DescribeSafetyRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSafetyRuleResponse describeSafetyRuleResponse;
    public DescribeSafetyRuleResponse withDescribeSafetyRuleResponse(openapisdk.models.shared.DescribeSafetyRuleResponse describeSafetyRuleResponse) {
        this.describeSafetyRuleResponse = describeSafetyRuleResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSafetyRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSafetyRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeSafetyRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}