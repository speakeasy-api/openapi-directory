package openapisdk.models.operations;



public class DeleteNotificationRuleResponse {
    public Object concurrentModificationException;
    public DeleteNotificationRuleResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteNotificationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteNotificationRuleResult deleteNotificationRuleResult;
    public DeleteNotificationRuleResponse withDeleteNotificationRuleResult(openapisdk.models.shared.DeleteNotificationRuleResult deleteNotificationRuleResult) {
        this.deleteNotificationRuleResult = deleteNotificationRuleResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteNotificationRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteNotificationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteNotificationRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}