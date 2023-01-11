package openapisdk.models.operations;



public class ListNotificationRulesResponse {
    public String contentType;
    public ListNotificationRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListNotificationRulesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListNotificationRulesResult listNotificationRulesResult;
    public ListNotificationRulesResponse withListNotificationRulesResult(openapisdk.models.shared.ListNotificationRulesResult listNotificationRulesResult) {
        this.listNotificationRulesResult = listNotificationRulesResult;
        return this;
    }
    public Long statusCode;
    public ListNotificationRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListNotificationRulesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}