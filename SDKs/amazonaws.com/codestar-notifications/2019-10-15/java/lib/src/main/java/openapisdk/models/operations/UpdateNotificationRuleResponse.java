package openapisdk.models.operations;



public class UpdateNotificationRuleResponse {
    public String contentType;
    public UpdateNotificationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateNotificationRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateNotificationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateNotificationRuleResult;
    public UpdateNotificationRuleResponse withUpdateNotificationRuleResult(java.util.Map<String, Object> updateNotificationRuleResult) {
        this.updateNotificationRuleResult = updateNotificationRuleResult;
        return this;
    }
    public Object validationException;
    public UpdateNotificationRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}