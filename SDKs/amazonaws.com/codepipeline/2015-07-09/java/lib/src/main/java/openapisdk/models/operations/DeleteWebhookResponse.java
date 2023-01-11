package openapisdk.models.operations;



public class DeleteWebhookResponse {
    public Object concurrentModificationException;
    public DeleteWebhookResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWebhookOutput;
    public DeleteWebhookResponse withDeleteWebhookOutput(java.util.Map<String, Object> deleteWebhookOutput) {
        this.deleteWebhookOutput = deleteWebhookOutput;
        return this;
    }
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteWebhookResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}