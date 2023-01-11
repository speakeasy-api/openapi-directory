package openapisdk.models.operations;



public class CreateNotificationRuleResponse {
    public Object accessDeniedException;
    public CreateNotificationRuleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateNotificationRuleResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public Object configurationException;
    public CreateNotificationRuleResponse withConfigurationException(Object configurationException) {
        this.configurationException = configurationException;
        return this;
    }
    public String contentType;
    public CreateNotificationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateNotificationRuleResult createNotificationRuleResult;
    public CreateNotificationRuleResponse withCreateNotificationRuleResult(openapisdk.models.shared.CreateNotificationRuleResult createNotificationRuleResult) {
        this.createNotificationRuleResult = createNotificationRuleResult;
        return this;
    }
    public Object limitExceededException;
    public CreateNotificationRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateNotificationRuleResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateNotificationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateNotificationRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}